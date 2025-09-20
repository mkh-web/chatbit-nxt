// components/Footer.tsx
'use client'
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

/**
 * Self-contained Footer component.
 * - All data (sections, socials, legal) live in this file.
 * - Edit the arrays below to add/remove sections, links, and socials.
 * - RTL friendly and responsive.
 */

/* ---------------------------
   Editable data (edit here)
   --------------------------- */
type LinkItem = { label: string; href: string; external?: boolean };
type Section = { title: string; links: LinkItem[] };
type SocialName = "twitter" | "facebook" | "instagram" | "linkedin";
type Social = { name: SocialName; href: string };

const FOOTER_SECTIONS: Section[] = [
    {
        title: "الخدمات",
        links: [
            { label: "ادارة المحادثات", href: "#" },
            { label: "تقارير ومتابعة", href: "#" },
            { label: "تكامل مع النظام", href: "#" },
        ],
    },
    {
        title: "الشركة",
        links: [
            { label: "من نحن", href: "#" },
            { label: "وظائف", href: "#" },
            { label: "المدونة", href: "#" },
        ],
    },
    {
        title: "الدعم",
        links: [
            { label: "الاسئلة الشائعة", href: "#faq" },
            { label: "مستندات", href: "#" },
            { label: "تواصل", href: "#contact" },
        ],
    },
];

const FOOTER_SOCIALS: Social[] = [
    { name: "twitter", href: "https://twitter.com/your" },
    { name: "facebook", href: "https://facebook.com/your" },
    { name: "instagram", href: "https://instagram.com/your" },
    { name: "linkedin", href: "https://linkedin.com/company/your" },
];

const FOOTER_LEGAL: LinkItem[] = [
    { label: "سياسة الخصوصية", href: "#" },
    { label: "شروط الاستخدام", href: "#" },
];

/* ---------------------------
   Icon mapping
   --------------------------- */
const ICONS: Record<SocialName, any> = {
    twitter: FaTwitter,
    facebook: FaFacebookF,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
};

/* ---------------------------
   Component
   --------------------------- */
export default function Footer() {
    return (
        <footer className="bg-[#1C1326] text-gray-100 mt-12">
            <div className="container-landing mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Brand column */}
                    <div className="md:col-span-4 text-right">
                        <div className="flex items-start justify-end gap-3">
                            <div className="w-12 h-12 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                                {/* logo placeholder */}
                                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" stroke="currentColor" strokeWidth="1.2" />
                                    <path d="M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                </svg>
                            </div>

                            <div className="max-w-xs">
                                <h4 className="font-bold">شات سينتر</h4>
                                <p className="text-sm text-gray-300 mt-1">
                                    نظام إدارة عملاء متكامل يساعدك على تحويل الزوار إلى عملاء ورفع المبيعات.
                                </p>

                                <div className="mt-4 flex items-center justify-end gap-3">
                                    {FOOTER_SOCIALS.map((s) => {
                                        const Icon = ICONS[s.name];
                                        return (
                                            <a
                                                key={s.name}
                                                href={s.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={s.name}
                                                className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-gray-200 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            >
                                                <Icon className="w-4 h-4" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic sections */}
                    <div className="md:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {FOOTER_SECTIONS.map((sec) => (
                                <div key={sec.title} className="text-right">
                                    <h5 className="font-semibold mb-3">{sec.title}</h5>
                                    <ul className="space-y-2">
                                        {sec.links.map((ln) => (
                                            <li key={ln.label}>
                                                {ln.external ? (
                                                    <a
                                                        href={ln.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm text-gray-300 hover:text-white"
                                                    >
                                                        {ln.label}
                                                    </a>
                                                ) : (
                                                    <Link href={ln.href} className="text-sm text-gray-300 hover:text-white">
                                                        {ln.label}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>

                {/* bottom: legal + copyright */}
                <div className="mt-8 border-t border-white/10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row-reverse md:justify-between items-center gap-3">
                    <div className="flex gap-4">
                        {FOOTER_LEGAL.map((l) => (
                            <Link key={l.label} href={l.href} className="hover:text-white">
                                {l.label}
                            </Link>
                        ))}
                    </div>
                    <div className="text-right">© {new Date().getFullYear()} جميع الحقوق محفوظة</div>
                </div>
            </div>
        </footer>
    );
}
