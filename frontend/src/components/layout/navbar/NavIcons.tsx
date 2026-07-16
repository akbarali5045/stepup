import Link from "next/link";
import { Heart, ShoppingCart, User } from "lucide-react";

export default function NavIcons() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/wishlist" aria-label="Wishlist">
        <Heart
          size={22}
          className="transition-all duration-300 hover:text-orange-500"
        />
      </Link>

      <Link href="/cart" aria-label="Cart">
        <ShoppingCart
          size={22}
          className="transition-all duration-300 hover:text-orange-500"
        />
      </Link>

      <Link href="/account" aria-label="Account">
        <User
          size={22}
          className="transition-colors hover:text-orange-500"
        />
      </Link>
    </div>
  );
}