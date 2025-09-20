// components/HeaderWhite.tsx
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const nav = [
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "الخدمات" },
    { href: "#contact", label: "تواصل معانا" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-landing mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand (left visually in RTL) */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                {/* replace this SVG with your logo (or <Image />) */}
                <svg
                  className="w-6 h-6 text-[#4828B7]"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M8 12h8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg text-gray-900">شات سينتر</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden sm:flex items-center gap-8 text-gray-700">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hover:text-[#4828B7] transition text-sm"
              >
                {n.label}
              </a>
            ))}

            <Link
              href="/login"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#4828B7] via-[#3a1d8c] to-[#201251] text-white text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              تسجيل الدخول
            </Link>
          </nav>

          {/* Mobile hamburger (visible only on mobile) */}
          <div className="sm:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:text-[#4828B7] focus:outline-none">
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
