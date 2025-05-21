import routes from "@/hooks/routes";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { NavigationBar } from "./navigation";
import { InformationIcon } from "../information";
import { useEffect, useState } from "react";

export const AppHeader = () => {
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);
  const isHomePage = location.pathname === routes.home || routes.root;

  useEffect(() => {
    const scrollThreshold = 50;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > scrollThreshold) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      key={location.pathname}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: hideHeader ? -100 : 0, opacity: hideHeader ? 0 : 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 font-[gilroy] text-white transition-colors duration-300 ${
        isHomePage ? "" : "bg-black/80 backdrop-blur-md"
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      <motion.div
        initial={{ x: 0, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-1/2 transform -translate-x-1/2 top-4 text-[96px] font-bold leading-none tracking-[11px]"
      >
        LJVE
      </motion.div>

      <div className="flex justify-between items-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{  duration: 1 }}
          className="mt-8 ml-auto mr-10 flex space-x-7 px-4 py-3"
        >
          <InformationIcon />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="mt-[20px] flex justify-center"
      >
        <NavigationBar />
      </motion.div>
    </motion.header>
  );
};
