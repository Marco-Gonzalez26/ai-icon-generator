import Link from "next/link";
import React from "react";
import { NavBarLink } from "~/utils/types";

const Navbar: React.FC<{
  links: NavBarLink[];
}> = ({ links }) => {
  return (
    <nav className="fixed top-0 flex w-full  justify-center gap-x-12 px-4 py-2">
      <a
        href="#top"
        className="font-semibold text-white sm:text-3xl md:text-3xl"
      >
        AiGen
      </a>
      <ul className="flex items-center gap-x-2">
        {links.map((link) => {
          return (
            <a
              href={link.path}
              key={link.text}
              className="text-md text-bold h-full w-full rounded-lg px-4 py-2 text-gray-100 backdrop-blur-3xl transition-all hover:bg-slate-50/10"
            >
              {link.text}
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
