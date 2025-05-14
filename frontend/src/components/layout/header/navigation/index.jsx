import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import routes from "@/hooks/routes";

export const NavigationBar = () => {
  const navBarBaseClass =
    "font-[Gilroy-Light] text-[24px] text-white px-4 transition-all ";

  const items = [
    { label: "Journal", to: routes.journals },
    { label: "About", to: routes.about },
    { label: "Home", to: routes.home },
    { label: "Projects", to: routes.projects },
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
            {index < items.length - 1 && (
              <div
                className="h-[1px] w-[48px] !bg-white mx-1"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
