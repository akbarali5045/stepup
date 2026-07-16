import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";

export default function NavLinks() {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-orange-500"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}