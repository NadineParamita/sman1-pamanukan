import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { visi, misi, sejarah } from "@/lib/data";

export const metadata = { title: "Profil | SMA Negeri 1 Pamanukan" };

export default function Tentang() {
  return (
    <>
      <PageHeader
        judul="Profil Sekolah"
        deskripsi="Sejarah, visi, dan misi SMA Negeri 1 Pamanukan."
      />

      <section id="sejarah" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-16">
        <SectionTitle judul="Sejarah" />
        <ol className="space-y-8 border-l-2 border-blue-900 pl-6">
          {sejarah.map((s) => (
            <li key={s.tahun} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 bg-amber-400" />
              <p className="text-sm font-bold text-amber-600">{s.tahun}</p>
              <h3 className="font-heading text-lg font-bold text-blue-900">
                {s.judul}
              </h3>
              <p className="mt-1 leading-relaxed">{s.isi}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="visi-misi" className="scroll-mt-20 bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle judul="Visi dan Misi" />
          <div className="border-l-4 border-amber-400 bg-white p-6">
            <p className="text-sm font-semibold uppercase text-blue-900">Visi</p>
            <p className="font-heading mt-2 text-xl leading-relaxed text-blue-900">
              {visi}
            </p>
          </div>

          <h3 className="font-heading mt-10 text-xl font-bold text-blue-900">
            Misi
          </h3>
          <ol className="mt-4 space-y-3">
            {misi.map((m, i) => (
              <li key={i} className="flex gap-4 border border-slate-200 bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-blue-900 font-bold text-white">
                  {i + 1}
                </span>
                <span>{m}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}