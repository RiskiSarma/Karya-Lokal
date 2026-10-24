export default function PageHead({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <section className="border-b border-line bg-soft py-16">
      <div className="wrap max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl">{title}</h1>
        {desc && <p className="mt-4 text-lg text-muted">{desc}</p>}
      </div>
    </section>
  );
}
