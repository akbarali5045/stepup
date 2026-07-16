import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/" aria-label="StepUp Home">
      <Image
        src="/images/logo_transparent.png"
        alt="StepUp Logo"
        width={120}
        height={36}
        priority
      />
    </Link>
  );
}
