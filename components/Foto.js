"use client";

import { useEffect, useRef, useState } from "react";

export default function Foto({
  src,
  alt,
  label,
  className = "",
  fit = "object-cover",
}) {
  const ref = useRef(null);
  const [gagal, setGagal] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setGagal(true);
  }, []);

  if (gagal) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-300 p-2 text-center text-xs text-slate-600 ${className}`}
      >
        {label ?? alt}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      onError={() => setGagal(true)}
      className={`${fit} ${className}`}
    />
  );
}