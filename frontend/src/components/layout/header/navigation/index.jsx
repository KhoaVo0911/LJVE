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

// Simple hamburger icon
const Hamburger = ({ open, onClick }) => (
  <button
    className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
    onClick={onClick}
    aria-label="Open menu"
  >
    <span
      className={`block h-0.5 w-6 bg-white transition-all duration-300 mb-1 ${
        open ? "rotate-45 translate-y-2" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-6 bg-white transition-all duration-300 mb-1 ${
        open ? "opacity-0" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
        open ? "-rotate-45 -translate-y-2" : ""
      }`}
    />
  </button>
);

export const NavigationBar = () => {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [disableAnimation, setDisableAnimation] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navBarBaseClass =
    "font-[Gilroy-Light] text-white text-lg sm:text-xl md:text-2xl px-3 sm:px-4 py-1 rounded-md transition-all";

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
    setMobileOpen(false); // Close mobile menu on click
  };

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="flex md:hidden justify-end w-full">
        <Hamburger open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
      </div>
      {/* Desktop menu */}
      <NavigationMenu>
        <NavigationMenuList
          key={location.pathname}
          className="hidden md:flex items-center bg-transparent"
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
                        initial={{}}
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
                              ? "orange"
                              : "white",
                          scale: hoverIndex === index ? 1.05 : 1,
                        }}
                        transition={{
                          duration: hoverIndex === index ? 0.3 : 1,
                          ease: "backInOut",
                        }}
                        onMouseEnter={() =>
                          !disableAnimation && setHoverIndex(index)
                        }
                        onMouseLeave={() =>
                          !disableAnimation && setHoverIndex(null)
                        }
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
                    duration: 0.5,
                    ease: "backInOut",
                  }}
                  className="h-[1px] w-[32px] md:w-[48px] !bg-white mx-1"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center md:hidden transition-all">
          {items.map((item, index) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => handleClick(item.to)}
              className={({ isActive }) =>
                `block text-2xl font-bold mb-8 px-8 py-2 rounded transition-colors duration-200 ${
                  isActive
                    ? "text-orange-400"
                    : "text-white hover:text-orange-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};
