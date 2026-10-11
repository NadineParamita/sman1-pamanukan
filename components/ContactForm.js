"use client";

import { useState } from "react";

const input = [
  "w-full border border-slate-300 bg-white px-4 py-3 outline-none",
  "focus:border-blue-900 focus:ring-2 focus:ring-blue-200",
].join(" ");

export default function ContactForm() {
  const [terkirim, setTerkirim] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerkirim(true);
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border border-slate-200 bg-slate-50 p-6"
    >
      <h3 className="font-heading text-xl font-bold text-blue-900">
        Kirim Pesan
      </h3>
      <input required name="nama" placeholder="Nama lengkap" className={input} />
      <input required type="email" name="email" placeholder="Email" className={input} />
      <textarea required name="pesan" rows={5} placeholder="Tulis pesan" className={input} />
      <button
        type="submit"
        className="bg-blue-900 px-6 py-3 font-semibold text-white hover:bg-blue-800"
      >
        Kirim
      </button>
      {terkirim && (
        <p className="border border-green-300 bg-green-50 p-3 text-sm text-green-800">
          Terima kasih, pesan Anda sudah diterima (simulasi).
        </p>
      )}
    </form>
  );
}