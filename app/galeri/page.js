import PageHeader from "@/components/PageHeader";
import Foto from "@/components/Foto";
import { galeri } from "@/lib/data";

export const metadata = { title: "Galeri | SMA Negeri 1 Pamanukan" };

export default function Galeri() {
  return (
    <>
      <PageHeader
        judul="Galeri Foto"
        deskripsi="Dokumentasi kegiatan di SMA Negeri 1 Pamanukan."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galeri.map((g) => (
            <figure key={g.judul} className="border border-slate-200 bg-white">
              <Foto
                src={g.src}
                alt={g.judul}
                label={`Foto: ${g.judul}`}
                className="aspect-[4/3] w-full"
              />
              <figcaption className="p-3 text-sm font-semibold text-blue-900">
                {g.judul}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}