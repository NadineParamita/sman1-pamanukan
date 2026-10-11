import Link from "next/link";
import { school, tautan } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-16 bg-blue-950 text-blue-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-white">
            {school.nama}
          </h3>
          <p className="mt-3 text-sm leading-relaxed">{school.alamat}</p>
        </div>

        <div>
          <h4 className="font-semibold text-amber-300">Profil</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/tentang#sejarah" className="hover:text-white">Sejarah</Link></li>
            <li><Link href="/tentang#visi-misi" className="hover:text-white">Visi dan Misi</Link></li>
            <li><Link href="/akademik" className="hover:text-white">Kesiswaan</Link></li>
            <li><Link href="/berita" className="hover:text-white">Berita</Link></li>
            <li><Link href="/galeri" className="hover:text-white">Galeri</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-amber-300">Tautan Terkait</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {tautan.map((t) => (
              <li key={t.nama}>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {t.nama}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-amber-300">Kontak</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Telp. {school.telepon}</li>
            <li>Instagram {school.instagram}</li>
            <li>
              <a
                href={school.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Situs resmi sekolah
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="border-t border-blue-900 py-4 text-center text-xs text-blue-300">
        © {new Date().getFullYear()} {school.nama}. Dibuat untuk tugas UTS Pemrograman Web.
      </p>
    </footer>
  );
}