import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { bannerToFilmSlug } from "@/hooks/mockData";

export const ProjectsListPage = ({ images }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const containerRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const scrollDirection = useRef("down");

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        scrollDirection.current = "down";
      } else if (currentScrollY < lastScrollY.current) {
        scrollDirection.current = "up";
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        const index = Number(target.getAttribute("data-index"));
        if (isIntersecting) {
          // Fade in only when scrolling down into view
          if (scrollDirection.current === "down") {
            setVisibleIndexes((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
          // If scrolling up into view, do nothing (don't fade out or fade in again)
        } else {
          // Fade out only when scrolling up out of view
          if (scrollDirection.current === "up") {
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
          // If scrolling down out of view, do nothing
        }
      });
    }, options);

    const items = containerRef.current.querySelectorAll(".fade-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [images]);

  return (
    <>
      {images && images.length > 0 ? (
        <div className="w-full flex justify-center mt-20">
          <div
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4"
          >
            {images.map((url, index) => {
              const filmObj = bannerToFilmSlug.find(
                (item) => item.image === url
              );
              const filmSlug = filmObj ? filmObj.slug : null;
              const filmInfo = filmObj || {};
              const hasInfo =
                filmInfo.releaseDate || filmInfo.director || filmInfo.stars;
              const isVisible = visibleIndexes.includes(index);
              const shouldFadeIn = index >= 4;

              const content = (
                <div
                  data-index={index}
                  className="fade-item relative group w-[904px] h-[509px] rounded-3xl overflow-hidden border-2 border-white"
                  style={{
                    opacity: shouldFadeIn ? (isVisible ? 1 : 0) : 1,
                    transform: shouldFadeIn
                      ? isVisible
                        ? "translateY(0)"
                        : "translateY(30px)"
                      : "none",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "2000ms",
                    willChange: "opacity, transform",
                  }}
                >
                  <img
                    src={url}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-3xl text-white text-left p-12 flex flex-col justify-start space-y-4">
                    {hasInfo ? (
                      <>
                        <div>
                          <p className="text-[18px] text-gray-400 font-semibold tracking-wider">
                            RELEASE DATE
                          </p>
                          <p className="text-[18px] font-semibold">
                            {filmInfo.releaseDate || "COMING SOON"}
                          </p>
                        </div>
                        <div>
                          <p className="text-[18px] text-gray-400 font-semibold tracking-wider">
                            WRITTEN AND DIRECTED BY
                          </p>
                          <p className="text-[18px] font-semibold">
                            {filmInfo.director || "COMING SOON"}
                          </p>
                        </div>
                        <div>
                          <p className="text-[18px] text-gray-400 font-semibold tracking-wider">
                            STARRING
                          </p>
                          <p className="text-[18px] font-semibold">
                            {filmInfo.stars || "COMING SOON"}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black bg-opacity-50 pointer-events-none">
                        <p className="text-[48px] font-bold text-white tracking-wide">
                          COMING SOON
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );

              return filmSlug ? (
                <Link to={`/film/${filmSlug}`} key={index}>
                  {content}
                </Link>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen text-center text-[48px] font-[Neogrotesk-Bold] px-[30vh] tracking-[0.3em] leading-relaxed break-words">
          FUTURE WORKS ARE ON PROCESS YOU COULD MAKE IT HAPPEN CONTACT ME
        </div>
      )}
    </>
  );
};
