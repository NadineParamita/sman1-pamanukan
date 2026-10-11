import Link from "next/link";
import Foto from "@/components/Foto";
import SectionTitle from "@/components/SectionTitle";
import { school, stats, visi, program, ekskul, berita } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-blue-900">
        <Foto
          src="/sekolah/gedung.jpg"
          alt="Gedung SMA Negeri 1 Pamanukan"
          label=""
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-blue-950/80" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
            Website Resmi
          </p>
          <h1 className="font-heading mt-3 max-w-2xl text-3xl font-bold leading-snug text-white md:text-5xl">
            {school.nama}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-blue-100">
            {school.tagline}. Sekolah negeri di Kabupaten Subang, Jawa Barat.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tentang"
              className="bg-amber-400 px-6 py-3 font-semibold text-blue-950 hover:bg-amber-300"
            >
              Profil Sekolah
            </Link>
            <Link
              href="/kontak"
              className="border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* STRIP INFO */}
      <div className="bg-amber-400 text-blue-950">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2 text-sm">
          <span className="shrink-0 font-bold uppercase">Info</span>
          <Link href="/berita" className="truncate hover:underline">
            {berita[0].judul}
          </Link>
        </div>
      </div>

      {/* STATISTIK */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-200 px-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="py-6 text-center">
              <p className="font-heading text-3xl font-bold text-blue-900">
                {s.value}
              </p>
              <p className="text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAMBUTAN */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Foto
            src="/sekolah/kepsek.png"
            alt="Foto Kepala Sekolah"
            className="h-[500px] w-full object-cover object-top"
            />
            <p className="mt-3 text-center text-sm font-semibold text-blue-900">
              Kepala Sekolah
            </p>
          </div>
          <div className="md:col-span-2">
            <SectionTitle judul="Sambutan Kepala Sekolah" />
            <p className="leading-relaxed">
              Website ini disiapkan sebagai media publikasi untuk menyampaikan
              informasi dan gambaran tentang layanan pendidikan di SMA Negeri 1
              Pamanukan. Dengan adanya website ini, masyarakat diharapkan dapat
              mengetahui berbagai informasi sekolah dengan mudah.
            </p>
            <blockquote className="mt-6 border-l-4 border-amber-400 bg-slate-50 p-4">
              <p className="text-sm font-semibold uppercase text-blue-900">
                Visi Sekolah
              </p>
              <p className="mt-1">{visi}</p>
            </blockquote>
            <a
              href="https://www.sma1pamanukan.sch.id/sambutan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-semibold text-blue-900 hover:underline"
            >
              Baca sambutan lengkap di situs resmi →
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAM SEKOLAH */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            judul="Program Sekolah"
            sub="Kegiatan kokurikuler dan pengembangan diri yang rutin dijalankan."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {program.slice(0, 6).map((p, i) => (
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
          <Link
            href="/akademik#program"
            className="mt-8 inline-block font-semibold text-blue-900 hover:underline"
          >
            Lihat semua program →
          </Link>
        </div>
      </section>

      {/* BERITA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle judul="Berita Terbaru" />
        <div className="grid gap-6 md:grid-cols-3">
          {berita.map((b) => (
            <article key={b.url} className="border border-slate-200 bg-white p-5">
              <span className="bg-blue-900 px-2 py-1 text-xs font-semibold text-white">
                {b.kategori}
              </span>
              <h3 className="font-heading mt-3 text-base font-bold leading-snug text-blue-900">
                {b.judul}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{b.tanggal}</p>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-blue-900 hover:underline"
              >
                Baca selengkapnya →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* EKSTRAKURIKULER */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle judul="Ekstrakurikuler" />
          <div className="flex flex-wrap gap-3">
            {ekskul.map((e) => (
              <span
                key={e}
                className="border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-900"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}