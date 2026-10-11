import PageHeader from "@/components/PageHeader";
import { berita, school } from "@/lib/data";

export const metadata = { title: "Berita | SMA Negeri 1 Pamanukan" };

export default function Berita() {
  return (
    <>
      <PageHeader
        judul="Berita"
        deskripsi="Pengumuman dan kegiatan terbaru SMA Negeri 1 Pamanukan."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="divide-y divide-slate-200 border border-slate-200 bg-white">
          {berita.map((b) => (
            <article key={b.url} className="p-6">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="bg-blue-900 px-2 py-1 text-xs font-semibold text-white">
                  {b.kategori}
                </span>
                <span className="text-slate-500">{b.tanggal}</span>
              </div>
              <h2 className="font-heading mt-3 text-xl font-bold text-blue-900">
                {b.judul}
              </h2>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-blue-900 hover:underline"
              >
                Baca selengkapnya di situs resmi →
              </a>
            </article>
          ))}
        </div>
        <a
          href={`${school.website}/berita`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-semibold text-blue-900 hover:underline"
        >
          Berita lainnya →
        </a>
      </section>
    </>
  );
}