import React, { useEffect, useRef, useState } from "react";
import { AboutMePage } from "@/components/aboutMe";
import { ServicePage } from "@/components/service";
import { IdiomPage } from "@/components/idiom";

export const AboutPage = () => {
  const [animateService, setAnimateService] = useState(false);
  const [reverseService, setReverseService] = useState(false);
  const [animateIdiom, setAnimateIdiom] = useState(false);
  const [reverseIdiom, setReverseIdiom] = useState(false);

  const serviceSectionRef = useRef(null);
  const idiomSectionRef = useRef(null);

  const animateServiceRef = useRef(false);
  const reverseServiceRef = useRef(false);
  const animateIdiomRef = useRef(false);
  const reverseIdiomRef = useRef(false);

  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDirection =
      currentScrollY > lastScrollY.current ? "down" : "up";
    lastScrollY.current = currentScrollY;

    const windowHeight = window.innerHeight;

    const checkAndUpdate = (
      sectionRef,
      setAnimate,
      setReverse,
      animateRef,
      reverseRef
    ) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView =
        rect.top <= windowHeight * 0.75 && rect.bottom >= windowHeight * 0.25;

      if (isInView && scrollDirection === "down" && !animateRef.current) {
        setAnimate(true);
        setReverse(false);
        animateRef.current = true;
        reverseRef.current = false;
      }

      if (!isInView && scrollDirection === "up" && !reverseRef.current) {
        setAnimate(false);
        setReverse(true);
        animateRef.current = false;
        reverseRef.current = true;
      }
    };

    checkAndUpdate(
      serviceSectionRef,
      setAnimateService,
      setReverseService,
      animateServiceRef,
      reverseServiceRef
    );
    checkAndUpdate(
      idiomSectionRef,
      setAnimateIdiom,
      setReverseIdiom,
      animateIdiomRef,
      reverseIdiomRef
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-10 mx-2 sm:mx-4 md:mx-10 lg:mx-30">
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
