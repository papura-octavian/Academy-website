import { withBasePath } from "@/lib/sitePaths";

export const SITE = {
  name: "Deselnicu Academy Craiova",
  slogan: "Academie de fotbal",
  owner: "Deselnicu Luigi Gabriel",
  coaches: ["Deselnicu Luigi Gabriel"],
  phoneDisplay: "+40 775 208 877",
  phoneHref: "tel:+40775208877",
  whatsappHref: "https://wa.me/40775208877",
  email: "deselniculuigi39@gmail.com",
  address: "Şcoala nr. 23 Craiova",
  program: "Luni - Vineri: 16:00 - 20:00 | Sâmbătă: 10:00 - 14:00",
  socials: {
    instagram: "https://www.instagram.com/deselnicu.academy.craiova/",
    tiktok: "https://www.tiktok.com/@echipamente_legea",
    youtube: "https://www.youtube.com/watch?v=AlnHNi0hdO0",
    facebook: "https://www.facebook.com/luigi.deselnicu.9"
  },
  media: {
    logo: withBasePath("/logo.png"),
    heroVideo: withBasePath("/hero.mp4"),
    heroImage: withBasePath("/hero_2.jpg"),
    galleryVideo: ".",
    coachPhotos: [
      withBasePath("/coach-1.3.jpg"),
      withBasePath("/coach-2.jpg"),
      withBasePath("/coach-3.jpg")
    ],
    gallery: [
      withBasePath("/gallery-1.jpg"),
      withBasePath("/gallery-2.jpg"),
      withBasePath("/gallery-3.jpg"),
      withBasePath("/certificat_1.png"),
      withBasePath("/certificat_2.png")
    ]
  },
  faq: [
    {
      question: "Ce echipament are nevoie copilul?",
      answer: "Se comanda echipamentul oficial al Academiei contracost la inscriere"
    },
    {
      question: "Cum se face înscrierea?",
      answer:
        "Completezi formularul în 2-3 minute, iar noi te sunăm în maximum 24 de ore pentru confirmare."
    },
    {
      question: "Există perioadă de probă?",
      answer: "Nu"
    },
    {
      question: "Unde se desfășoară antrenamentele?",
      answer: "Antrenamentele au loc la baza sportivă principală, ușor accesibilă cu mașina"
    },
    {
      question: "Cum se plătește abonamentul?",
      answer:
        "Plata se face lunar, prin transfer bancar sau numerar, la începutul fiecărei luni."
    }
  ],
  groups: [
    {
      id: "mini",
      label: "Mini (4-6 ani)",
      minAge: 4,
      maxAge: 6,
      description: "Coordonare, joacă și bazele fotbalului."
    },
    {
      id: "junior",
      label: "Junior (7-9 ani)",
      minAge: 7,
      maxAge: 9,
      description: "Tehnică de bază și lucru în echipă."
    },
    {
      id: "intermediar",
      label: "Intermediar (10-12 ani)",
      minAge: 10,
      maxAge: 12,
      description: "Dezvoltare tactică și intensitate crescută."
    },
  ],
  pricing: [
    {
      name: "Abonament",
      price: "350 lei / lună",
      details: "4 antrenamente / săptămână"
    }
  ],
  location: {
    lat: "44.32698469886162",
    lng: "23.806496921116587"
  }
};

export const LOCATIONS = [
  {
    id: "central",
    name: "Baza sportivă (principală)",
    address: "Şcoala nr. 23 Craiova"
  }
];
