import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import React from "react";
import { Link } from "react-router-dom";
import routes from "@/hooks/routes";

export const NavigationBar = () => {
  const navBarCustom = "font-[Gilroy-Light] text-white text-[24px] px-4";
  const items = [
    { label: "Journal", to: "/" + routes.journals },
    { label: "About", to: "/" + routes.about },
    { label: "Home", to: routes.home },
    { label: "Projects", to: "/" + routes.projects },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center ">
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            <NavigationMenuItem>
              <Link to={item.to} legacyBehavior passHref>
                <NavigationMenuLink className={navBarCustom}>
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
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
