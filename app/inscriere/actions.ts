"use server";

import nodemailer from "nodemailer";
import { google } from "googleapis";
import { registrationSchema, type RegistrationPayload } from "@/lib/registrationSchema";
import { GROUPS } from "@/lib/groups";
import { LOCATIONS, SITE } from "@/lib/constants";

function formatPayload(payload: RegistrationPayload) {
  const groupLabel = GROUPS.find((group) => group.id === payload.group)?.label ?? payload.group;
  const locationLabel =
    LOCATIONS.find((location) => location.id === payload.location)?.name ?? payload.location;

  return {
    ...payload,
    groupLabel,
    locationLabel
  };
}

async function sendEmail(payload: RegistrationPayload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !SMTP_TO) {
    return { enabled: false };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  const formatted = formatPayload(payload);

  await transporter.sendMail({
    from: `"${SITE.name}" <${SMTP_FROM}>`,
    to: SMTP_TO,
    subject: "Înscriere nouă - Academia de Fotbal",
    text: `Înscriere nouă\n\nCopil: ${formatted.childName}\nData nașterii: ${formatted.birthDate}\nNivel: ${formatted.level || "-"}\nPărinte: ${formatted.parentName}\nTelefon: ${formatted.phone}\nEmail: ${formatted.email || "-"}\nLocalitate: ${formatted.city || "-"}\nGrupă: ${formatted.groupLabel}\nLocație: ${formatted.locationLabel}`
  });

  return { enabled: true };
}

async function appendToSheet(payload: RegistrationPayload) {
  const {
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEET_ID,
    GOOGLE_SHEET_TAB
  } = process.env;

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    return { enabled: false };
  }

  const auth = new google.auth.JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  const sheets = google.sheets({ version: "v4", auth });
  const formatted = formatPayload(payload);
  const tab = GOOGLE_SHEET_TAB || "Sheet1";

  await sheets.spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: `${tab}!A1`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          formatted.childName,
          formatted.birthDate,
          formatted.level || "-",
          formatted.parentName,
          formatted.phone,
          formatted.email || "-",
          formatted.city || "-",
          formatted.groupLabel,
          formatted.locationLabel
        ]
      ]
    }
  });

  return { enabled: true };
}

export async function registerAction(payload: RegistrationPayload) {
  const parsed = registrationSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false, message: "Date invalide. Te rugăm să verifici formularul." };
  }

  try {
    const [emailResult, sheetResult] = await Promise.all([
      sendEmail(parsed.data),
      appendToSheet(parsed.data)
    ]);

    if (!emailResult.enabled && !sheetResult.enabled) {
      console.log("Înscriere nouă:", parsed.data);
    }

    return { ok: true };
  } catch (error) {
    console.error("Registration error", error);
    return { ok: false, message: "Nu am putut salva înscrierea." };
  }
}
