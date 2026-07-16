import Container from "@/components/layout/Container";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-20 items-center">
          {/* Logo */}
          <NavLogo />

          {/* Desktop Navigation */}
          <div className="hidden flex-1 justify-center lg:flex">
            <NavLinks />
          </div>

          {/* Desktop Right Side */}
          <div className="ml-auto hidden items-center gap-4 lg:flex">
            <SearchBar />
            <NavIcons />
          </div>

          {/* Mobile Right Side */}
          <div className="ml-auto flex items-center gap-4 lg:hidden">
            <NavIcons />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
