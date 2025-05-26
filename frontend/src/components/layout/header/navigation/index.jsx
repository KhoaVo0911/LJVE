import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import routes from "@/hooks/routes";

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

export const NavigationBar = ({ mobileOpen, setMobileOpen }) => {
  const location = useLocation();
  const [animationKey, setAnimationKey] = React.useState(0);
  const [hoverIndex, setHoverIndex] = React.useState(null);
  const [disableAnimation, setDisableAnimation] = React.useState(false);

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
    if (setMobileOpen) setMobileOpen(false);
  };

  return (
    <>
      {typeof mobileOpen === "boolean" &&
        typeof setMobileOpen === "function" && (
          <div
            className={`fixed left-0 top-0 h-full w-72 z-[100] transition-transform duration-500 ease-out transform md:hidden ${
              mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            <div className="flex flex-col items-start h-full pt-24 pl-6 relative">
              {items.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `font-[Gilroy-Light] text-2xl sm:text-3xl w-full text-white px-6 py-4 transition-all duration-500 relative overflow-hidden group mb-2 ${
                      isActive
                        ? "font-bold bg-white/10 border-l-4 border-orange-400 text-orange-300"
                        : "font-normal hover:bg-white/5 hover:text-orange-200"
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="absolute inset-0 bg-white/5 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                    {item.label}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
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
    </>
  );
};
