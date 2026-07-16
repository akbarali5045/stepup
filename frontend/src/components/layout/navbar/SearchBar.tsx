import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="hidden lg:flex items-center">
      <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5">
        <Search size={18} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search products..."
          className="w-56 bg-transparent text-sm focus:outline-none placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}
