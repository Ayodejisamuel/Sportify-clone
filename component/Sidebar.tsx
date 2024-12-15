 "use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";



const Sidebar = ({children}) => {
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
      <div className="text-red-400">now lets go</div>
    </div>
  );
};

export default Sidebar;