// src/components/ui/FlipBook.jsx
import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import leftArrow from "/src/assets/arrow-left.png";
import rightArrow from "/src/assets/arrow-right.png";

export default function FlipBook({ projects }) {
  // kita tampilkan 2 project per "spread"
  const spreads = useMemo(() => {
    const arr = [];
    for (let i = 0; i < projects.length; i += 2) {
      arr.push([projects[i] || null, projects[i + 1] || null]);
    }
    return arr;
  }, [projects]);

  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const canPrev = index > 0;
  const canNext = index < spreads.length - 1;

  const go = (dir) => {
    if (isFlipping) return;
    if (dir === 1 && !canNext) return;
    if (dir === -1 && !canPrev) return;
    setIsFlipping(true);
    // flip duration = 700ms (sesuaikan tailwind transition jika perlu)
    setTimeout(() => {
      setIndex((i) => i + dir);
      setIsFlipping(false);
    }, 700);
  };

  return (
    <div className="w-full max-w-[1100px] mx-auto relative">
      {/* left arrow */}
      <button
        onClick={() => go(-1)}
        aria-label="previous"
        className={`absolute left-[-48px] top-1/2 -translate-y-1/2 z-40`}
        style={{ opacity: canPrev ? 1 : 0.35 }}
      >
        <img src={leftArrow} alt="left" className="w-12 h-12" />
      </button>

      {/* right arrow */}
      <button
        onClick={() => go(1)}
        aria-label="next"
        className={`absolute right-[-48px] top-1/2 -translate-y-1/2 z-40`}
        style={{ opacity: canNext ? 1 : 0.35 }}
      >
        <img src={rightArrow} alt="right" className="w-12 h-12" />
      </button>

      {/* book container */}
      <div className="relative perspective-1000">
        <div
          className={`relative w-full h-[520px] bg-transparent flex items-stretch`}
          aria-hidden={isFlipping}
        >
          {/* left page */}
          <div className={`w-1/2 p-6`}>
            <div
              className={`w-full h-full transform-origin-left transition-transform duration-700 ${isFlipping ? "rotate-y-180" : "rotate-y-0"}`}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <ProjectCard project={spreads[index][0]} />
            </div>
          </div>

          {/* middle gutter (book spine) */}
          <div className="w-[10px] flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[6px] h-40 bg-pink-200 rounded"></div>
            </div>
          </div>

          {/* right page */}
          <div className={`w-1/2 p-6`}>
            <div
              className={`w-full h-full transform-origin-right transition-transform duration-700 ${isFlipping ? "rotate-y-0" : "rotate-y-0"}`}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <ProjectCard project={spreads[index][1]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
