export default function SectionTitle({ judul, sub }) {
  return (
    <div className="mb-8">
      <h2 className="font-heading text-2xl font-bold text-blue-900 md:text-3xl">
        {judul}
      </h2>
      <div className="mt-3 h-1 w-16 bg-amber-400" />
      {sub && <p className="mt-3 max-w-2xl text-slate-600">{sub}</p>}
    </div>
  );
}