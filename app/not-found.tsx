import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090A0D] text-white flex flex-col items-center justify-center font-mono p-6 space-y-4">
      <h1 className="text-2xl sm:text-3xl font-light tracking-wide">
        404 — PAGE NOT FOUND
      </h1>
      <Link
        href="/"
        className="text-xs tracking-widest text-white/60 hover:text-white border border-white/20 px-5 py-2.5 rounded-full transition-colors"
      >
        RETURN HOME →
      </Link>
    </div>
  );
}
