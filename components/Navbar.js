"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Foto from "@/components/Foto";
import { school } from "@/lib/data";

const menu = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/tentang",
    sub: [
      { label: "Sejarah", href: "/tentang#sejarah" },
      { label: "Visi dan Misi", href: "/tentang#visi-misi" },
    ],
  },
  {
    label: "Kesiswaan",
    href: "/akademik",
    sub: [
      { label: "Program Sekolah", href: "/akademik#program" },
      { label: "Ekstrakurikuler", href: "/akademik#ekskul" },
    ],
  },
  { label: "Berita", href: "/berita" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-blue-950 text-xs text-blue-100">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2">
          <p>
            Telp. {school.telepon} &nbsp;|&nbsp; Instagram {school.instagram}
          </p>
          <a
            href={school.elearning}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline"
          >
            E-Learning
          </a>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
          <Link href="/" className="flex items-center gap-4">
            <Foto
              src="/logo.png"
              alt="Logo SMA Negeri 1 Pamanukan"
              label="Logo"
              fit="object-contain"
              className="h-16 w-16 shrink-0"
            />
            <div>
              <p className="font-heading text-lg font-bold leading-tight text-blue-900 md:text-2xl">
                {school.nama}
              </p>
              <p className="text-sm text-slate-500">
                Kabupaten Subang, Jawa Barat
              </p>
            </div>
          </Link>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-blue-900 text-white shadow">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <ul className="hidden md:flex">
            {menu.map((m) => (
              <li key={m.href} className="group relative">
                <Link
                  href={m.href}
                  className={`block border-b-4 px-4 py-3.5 text-sm font-semibold ${
                    pathname === m.href
                      ? "border-amber-400 bg-blue-950"
                      : "border-transparent hover:bg-blue-800"
                  }`}
                >
                  {m.label}
                </Link>
                {m.sub && (
                  <ul className="invisible absolute left-0 top-full min-w-52 bg-white text-slate-700 shadow-lg group-focus-within:visible group-hover:visible">
                    {m.sub.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="block px-4 py-2.5 text-sm hover:bg-blue-50 hover:text-blue-900"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <p className="py-3 text-sm font-semibold md:hidden">Menu</p>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Buka menu"
            className="py-2 text-2xl md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <ul className="border-t border-blue-800 md:hidden">
            {menu.map((m) => (
              <li key={m.href}>
                <Link
                  href={m.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold hover:bg-blue-800"
                >
                  {m.label}
                </Link>
                {m.sub?.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="block bg-blue-950 py-2 pl-8 pr-4 text-sm text-blue-100"
                  >
                    {s.label}
                  </Link>
                ))}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}