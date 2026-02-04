export function GradientBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="absolute top-1/3 left-10 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary-100/60 blur-3xl" />
    </div>
  );
}
