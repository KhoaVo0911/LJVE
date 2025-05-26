import { AboutMePage } from "@/components/aboutMe";
import { IdiomPage } from "@/components/idiom";
import { ServicePage } from "@/components/service";
import React, { useEffect, useRef, useState } from "react";

export const AboutPage = () => {
  const [animateService, setAnimateService] = useState(false);
  const [reverseService, setReverseService] = useState(false);
  const [animateIdiom, setAnimateIdiom] = useState(false);
  const [reverseIdiom, setReverseIdiom] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const serviceSectionRef = useRef(null);
  const idiomSectionRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
    setLastScrollY(currentScrollY);

    const windowHeight = window.innerHeight;

    const checkAndUpdate = (sectionRef, setAnimate, setReverse) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView =
        rect.top <= windowHeight * 0.75 && rect.bottom >= windowHeight * 0.25;

      if (isInView && scrollDirection === "down") {
        setAnimate(true);
        setReverse(false);
      }

      if (rect.bottom < 0 && scrollDirection === "up") {
        setAnimate(false);
        setReverse(true);
      }
    };

    checkAndUpdate(serviceSectionRef, setAnimateService, setReverseService);
    checkAndUpdate(idiomSectionRef, setAnimateIdiom, setReverseIdiom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="mx-6 mt-10">
      <AboutMePage />

      <div ref={serviceSectionRef}>
        <ServicePage animate={animateService} reverse={reverseService} />
      </div>

      <div ref={idiomSectionRef}>
        <IdiomPage animate={animateIdiom} reverse={reverseIdiom} />
      </div>
    </div>
  );
};
