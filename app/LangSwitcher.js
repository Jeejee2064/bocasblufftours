"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangSwitcher() {
  const pathname = usePathname();
  const isES = pathname.startsWith("/es");

  if (isES) {
    return (
      <Link
        href="/"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:border-white/50 transition-all no-underline group"
      >
        <span className="text-lg leading-none">🇺🇸</span>
        <span className="text-white/70 group-hover:text-white text-xs uppercase tracking-widest transition-colors">
          EN
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/es"
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:border-white/50 transition-all no-underline group"
    >
      <span className="text-lg leading-none">🇵🇦</span>
      <span className="text-white/70 group-hover:text-white text-xs uppercase tracking-widest transition-colors">
        ES
      </span>
    </Link>
  );
}