import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";
import { Link } from "react-router-dom";
import { path } from "@/constants/path";

export const NavigationBar = () => {
  const navBarCustom = "font-[Gilroy-Light] text-white text-[24px] px-4";
  // Map item name to path
  const items = [
    { label: "Journal", to: path.journal },
    { label: "About", to: path.about },
    { label: "Home", to: path.home },
    { label: "Projects", to: path.projects },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center ">
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            <NavigationMenuItem>
              <Link to={item.to} className={navBarCustom}>
                {item.label}
              </Link>
            </NavigationMenuItem>
            {/* Real horizontal line between items, skip after last */}
            {index < items.length - 1 && (
              <div
                className="h-[1px] w-[48px] !bg-white mx-1 "
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
