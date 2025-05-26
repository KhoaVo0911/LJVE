import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import routes from "@/hooks/routes";

export const ProjectCategory = () => {
  const navBarBaseClass =
    "font-[Neogrotesk-NeoSCBlack] text-[20px] text-white px-[7vh] transition-all tracking-[0.1em] leading-relaxed break-words";

  const items = [
    { label: "ALL PROJECTS", to: `${routes.projects}/${routes.allProjects}` },
    { label: "DOCUMENTARY", to: `${routes.projects}/${routes.documentary}` },
    { label: "MUSIC VIDEO", to: `${routes.projects}/${routes.musicVideo}` },
    { label: "ORIGINAL", to: `${routes.projects}/${routes.original}` },
    { label: "SHORT FILM", to: `${routes.projects}/${routes.shortFilm}` },
    { label: "COMMERCIAL", to: `${routes.projects}/${routes.commercial}` },
  ];

  return (
    <div className="hidden md:block w-full max-w-full overflow-x-auto touch-pan-x md:overflow-x-visible border-b border-white/20 shadow-sm pb-1 bg-black sticky top-0 z-20">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center whitespace-nowrap scroll-smooth gap-2 sm:gap-4 md:gap-8 py-2 md:pl-0 snap-x snap-mandatory overscroll-x-contain w-full">
          <div className="w-1 h-0 pointer-events-none" aria-hidden="true" />
          {items.map((item, index) => (
            <React.Fragment key={item.label}>
              <NavigationMenuItem>
                <NavLink to={item.to}>
                  {({ isActive }) => (
                    <NavigationMenuLink
                      className={`${navBarBaseClass} text-base sm:text-lg md:text-xl px-4 md:px-10 whitespace-nowrap snap-start ${
                        isActive
                          ? "font-normal text-white/60"
                          : "font-extrabold text-white"
                      }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavLink>
              </NavigationMenuItem>
            </React.Fragment>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
