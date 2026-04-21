import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">404</p>
      <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
        Pagina nu a fost găsită
      </h1>
      <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
        Linkul poate fi greșit sau pagina a fost mutată. Revino pe prima pagină și continuă de
        acolo.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
      >
        Înapoi la homepage
      </Link>
    </section>
  );
}
