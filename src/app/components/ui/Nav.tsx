"use client";
import { navLinks } from "@/app/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

// NAvigation component
export const Nav: React.FC = () => {
  // Access cueernt path
  const pathname = usePathname();

  const excludedRoutes = ["/dashboard", "/login"];

  // Check if the current path starts with any excluded route
  const shouldHideHeader = excludedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (shouldHideHeader) return null;
  return (
    <div>
      <nav className="flex justify-center gap-16 mt-10">
        {navLinks.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`font-semibold tracking-tight text-lg ${
                pathname === link.path ? "text-blue-400" : "text-slate-800"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
