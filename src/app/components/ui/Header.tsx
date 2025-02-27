"use client";

import HeaderImage from "../../assect/Images/HeaderImage.png";
import { usePathname } from "next/navigation";
import { Profile } from "../Header";

// Common Header component for display on all pages except excluded routes
export const Header: React.FC = () => {
  const path = usePathname();

  // Define routes where the header should be hidden
  const excludedRoutes = ["/dashboard", "/login"];

  // Check if the current path starts with any excluded route
  const shouldHideHeader = excludedRoutes.some((route) => path.startsWith(route));

  if (shouldHideHeader) return null;

  return <Profile HeaderImage={HeaderImage} />;
};
