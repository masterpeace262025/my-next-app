'use client'
import { AdminNavLinks } from "@/app/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AdminNav = () => {
  const pathname = usePathname(); // Get current route

  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="flex justify-center space-x-4">
        {AdminNavLinks.map((link) => (
          <div key={link.name}>
            <Link 
              href={link.path}
              className={`px-4 py-2 rounded-lg text-white transition ${
                pathname === link.path ? "bg-blue-500" : "hover:bg-gray-700"
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};
