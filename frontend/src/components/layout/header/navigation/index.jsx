import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import routes from "@/hooks/routes";

export const NavigationBar = () => {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [disableAnimation, setDisableAnimation] = useState(false);

  const navBarBaseClass =
    "font-[Gilroy-Light] text-white text-[24px] px-4 py-1 rounded-md transition-all";

  const items = [
    { label: "Journal", to: routes.journals },
    { label: "About", to: routes.about },
    { label: "Home", to: routes.home },
    { label: "Projects", to: routes.projects },
  ];

 const handleClick = (to) => {
    if (location.pathname === to) {
      setDisableAnimation(true);
    } else {
      setDisableAnimation(false);
      setAnimationKey((prev) => prev + 1);
    }
  };
  return (
    <NavigationMenu>
      <NavigationMenuList
        key={location.pathname}
        className="flex items-center bg-transparent"
      >
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink
                  to={item.to}
                  className="group"
                  onClick={() => handleClick(item.to)}
                  style={{ background: "transparent" }}
                >
                  {({ isActive }) => (
                    <motion.span
                      key={animationKey} 
                      initial={{ x: -15, y: 15, opacity: 0 }}
                      animate={{
                        x: 0,
                        y: 0,
                        opacity: 1,
                        backgroundColor:
                          hoverIndex === index ? "white" : "transparent",
                        color:
                          hoverIndex === index
                            ? "black"
                            : isActive
                            ? "white"
                            : "white",
                        scale: hoverIndex === index ? 1.05 : 1,
                      }}
                      transition={{
                        delay: hoverIndex === index ? 0 : index * 0.15,
                        duration: hoverIndex === index ? 0.3 : 0.7,
                        ease: "backInOut",
                      }}
                      onMouseEnter={() => !disableAnimation && setHoverIndex(index)}
                      onMouseLeave={() => !disableAnimation && setHoverIndex(null)}
                      className={`${navBarBaseClass} ${
                        isActive ? "font-extrabold" : "font-normal"
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {index < items.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.15 + 0.7,
                  duration: 0.5,
                  ease: "backInOut",
                }}
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
