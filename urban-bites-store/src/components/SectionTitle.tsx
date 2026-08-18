export default function SectionTitle({ eyebrow, title, text, centered = false }: { eyebrow?: string; title: string; text?: string; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-rosebrand">{eyebrow}</p>}
      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#2b2523] sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 leading-7 text-[#756861]">{text}</p>}
    </div>
  );
}