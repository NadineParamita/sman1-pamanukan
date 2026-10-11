import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { school } from "@/lib/data";

export const metadata = { title: "Kontak | SMA Negeri 1 Pamanukan" };

export default function Kontak() {
  const info = [
    { label: "Alamat", nilai: school.alamat },
    { label: "Telepon", nilai: school.telepon },
    { label: "Instagram", nilai: school.instagram },
  ];

  return (
    <>
      <PageHeader
        judul="Kontak"
        deskripsi="Hubungi kami atau kunjungi sekolah secara langsung."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <dl className="divide-y divide-slate-200 border border-slate-200">
            {info.map((i) => (
              <div key={i.label} className="grid grid-cols-3 gap-4 p-4">
                <dt className="font-semibold text-blue-900">{i.label}</dt>
                <dd className="col-span-2">{i.nilai}</dd>
              </div>
            ))}
          </dl>
          <iframe
            title="Lokasi SMA Negeri 1 Pamanukan"
            src="https://www.google.com/maps?q=SMA+Negeri+1+Pamanukan&output=embed"
            className="mt-6 h-64 w-full border border-slate-200"
            loading="lazy"
          />
        </div>

        <ContactForm />
      </section>
    </>
  );
}