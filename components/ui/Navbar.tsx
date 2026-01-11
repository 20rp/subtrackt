"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <nav className="flex items-center justify-between p-6">
      {!isHome && (
        <Link
          href="/"
          className="text-gray-400 text-s hover:text-white transition-colors"
        >
          ← Back to dashboard
        </Link>
      )}
      {/* TODO: Logo */}
      <div className="ml-auto">
        <Link
          href="/new"
          className="text-xs font-bold text-white bg-rose-500 px-4 py-2 rounded-full"
        >
          + Add New
        </Link>
      </div>
    </nav>
  );
}
