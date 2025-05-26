import React, { useState, useEffect } from "react";
import { NavigationBar } from "./navigation";
import { InformationIcon } from "../information";

export const MobileMenuOverlay = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideHamburger, setHideHamburger] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHamburger = () => {
      if (window.innerWidth >= 768) return;
      const currentY = window.scrollY;
      setScrollY(currentY);
      if (currentY > lastScrollY && currentY > 50) {
        setHideHamburger(true);
      } else if (currentY < lastScrollY) {
        setHideHamburger(false);
      }
      lastScrollY = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHamburger);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:hidden">
      <div
        className={`fixed inset-0 backdrop-blur-2xl bg-black/40 transition-all duration-500 z-[100] md:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
        onClick={() => setMobileOpen(false)}
      />
      {!hideHamburger && !mobileOpen && scrollY < 80 && (
        <button
          className={`md:hidden fixed top-6 left-6 z-[200] p-2 hover:opacity-80 translate-y-0`}
          style={{
            opacity: 1 - scrollY / 80,
            transform: `translateY(${Math.min(scrollY, 80) / 2}px)`,
            pointerEvents: scrollY < 80 ? "auto" : "none",
            transition:
              "opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle mobile menu"
        >
          <div
            className="w-7 h-0.5 bg-white mb-1.5 transition-transform duration-500"
            style={{
              transform: mobileOpen
                ? "rotate(45deg) translate(6px, 6px)"
                : "none",
            }}
          ></div>
          <div
            className="w-7 h-0.5 bg-white mb-1.5 transition-opacity duration-500"
            style={{ opacity: mobileOpen ? "0" : "1" }}
          ></div>
          <div
            className="w-7 h-0.5 bg-white transition-transform duration-500"
            style={{
              transform: mobileOpen
                ? "rotate(-45deg) translate(6px, -6px)"
                : "none",
            }}
          ></div>
        </button>
      )}
      {mobileOpen && (
        <button
          className="md:hidden fixed top-6 left-6 z-[200] p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
          onClick={() => setMobileOpen(false)}
          aria-label="Close mobile menu"
        >
          <svg width="32" height="32" viewBox="0 0 32 32">
            <line
              x1="8"
              y1="8"
              x2="24"
              y2="24"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="24"
              y1="8"
              x2="8"
              y2="24"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
      <NavigationBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {mobileOpen && (
        <div className="fixed bottom-6 left-0 w-full flex justify-center z-[100]">
          <InformationIcon direction="row" gap="gap-6" />
        </div>
      )}
    </div>
  );
};
