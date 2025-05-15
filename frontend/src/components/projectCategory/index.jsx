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
    "font-[Neogrotesk-NeoSCBlack] text-[20px] text-white px-[7vh] transition-all tracking-[0.1em] ";

  const items = [
    { label: "ALL PROJECTS", to: `${routes.projects}/${routes.allProjects}` },
    { label: "DOCUMENTARY", to: `${routes.projects}/${routes.documentary}` },
    { label: "MUSIC VIDEO", to: `${routes.projects}/${routes.musicVideo}` },
    { label: "ORIGINAL", to: `${routes.projects}/${routes.original}` },
    { label: "SHORT FILM", to: `${routes.projects}/${routes.shortFilm}` },
    { label: "COMMERCIAL", to: `${routes.projects}/${routes.commercial}` },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center">
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            <NavigationMenuItem>
              <NavLink to={item.to}>
                {({ isActive }) => (
                  <NavigationMenuLink
                    className={`${navBarBaseClass} ${
                      isActive ? "font-extrabold" : "font-normal"
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
  );
};
