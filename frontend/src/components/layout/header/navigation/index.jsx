import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

export const NavigationBar = () => {
  const navBarCustom = "font-[Gilroy-Light] text-white text-[24px] px-4";
  const items = ["Journal", "About", "Home", "Projects"];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center ">
        {items.map((item, index) => (
          <React.Fragment key={item}>
            <NavigationMenuItem>
              <div className={navBarCustom}>{item}</div>
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