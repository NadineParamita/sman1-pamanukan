import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { program, ekskul } from "@/lib/data";

export const metadata = { title: "Kesiswaan | SMA Negeri 1 Pamanukan" };

export default function Kesiswaan() {
  return (
    <>
      <PageHeader
        judul="Kesiswaan"
        deskripsi="Program sekolah dan kegiatan ekstrakurikuler untuk mengembangkan potensi siswa."
      />

      <section id="program" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
        <SectionTitle judul="Program Sekolah" />
        <div className="grid gap-6 md:grid-cols-3">
          {program.map((p, i) => (
            <div
              key={p.nama}
              className="border border-slate-200 border-t-4 border-t-blue-900 bg-white p-6"
            >
              <p className="text-sm font-bold text-amber-600">0{i + 1}</p>
              <h3 className="font-heading mt-1 text-lg font-bold text-blue-900">
                {p.nama}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{p.isi}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ekskul" className="scroll-mt-20 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle judul="Ekstrakurikuler" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {ekskul.map((e) => (
              <div
                key={e}
                className="border border-slate-200 bg-white p-4 text-center font-semibold text-blue-900"
              >
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}