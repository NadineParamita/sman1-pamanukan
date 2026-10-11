import Link from "next/link";

export default function PageHeader({ judul, deskripsi }) {
  return (
    <section className="border-b-4 border-amber-400 bg-blue-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm text-blue-200">
          <Link href="/" className="hover:underline">
            Beranda
          </Link>{" "}
          / {judul}
        </p>
        <h1 className="font-heading mt-2 text-3xl font-bold md:text-4xl">
          {judul}
        </h1>
        {deskripsi && <p className="mt-2 max-w-2xl text-blue-100">{deskripsi}</p>}
      </div>
    </section>
  );
}