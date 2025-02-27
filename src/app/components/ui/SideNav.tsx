"use client";

import { sideNav } from "@/app/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Side bar for dashboard
export const SideNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="h-screen bg-gray-900 text-white flex flex-col p-5 transition-all duration-300 ease-in-out">
   <div className="space-y-6">
        {sideNav.map((link) => (
          <div key={link.name}>
            <Link
              href={link.path}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                pathname === link.path
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
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
