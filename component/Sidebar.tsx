 "use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import React, { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BsSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="block w-[300px] bg-black text-white p-4">
      <div className="text-red-400">now lets</div>
      <nav>
        {routes.map((route) => (
          <a
            key={route.label}
            href={route.href}
            className={`flex items-center gap-2 p-2 ${
              route.active ? "text-green-400" : "text-gray-400"
            }`}
          >
            <route.icon size={20} />
            <span className="text-green-400">{route.label}</span>
          </a>
        ))}
      </nav>
      {children}
    </div>
  );
};

export default Sidebar;
