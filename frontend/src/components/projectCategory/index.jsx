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
    "font-[Neogrotesk-NeoSCBlack] text-[20px] text-white px-[9vh] transition-all tracking-[0.1em] ";

  const items = [
    { label: "DOCUMENTARY", to: routes.journals },
    { label: "MUSIC VIDEO", to: routes.journals },
    { label: "ORIGINAL", to: routes.about },
    { label: "SHORT FILM", to: routes.home },
    { label: "COMMERCIAL", to: routes.projects },
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
