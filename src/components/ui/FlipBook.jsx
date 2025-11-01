import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import leftArrow from "/assets/arrow-left.png";
import rightArrow from "/assets/arrow-right.png";

export default function FlipBook({ projects }) {
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
    setTimeout(() => {
      setIndex((i) => i + dir);
      setIsFlipping(false);
    }, 700);
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto relative">
      <button
        onClick={() => go(-1)}
        aria-label="previous"
        className={`absolute left-[-32px] top-1/2 -translate-y-1/2 z-40`}
        style={{ opacity: canPrev ? 1 : 0.35 }}
      >
        <img src={leftArrow} alt="left" className="w-12 h-12" />
      </button>

      <button
        onClick={() => go(1)}
        aria-label="next"
        className={`absolute right-[-32px] top-1/2 -translate-y-1/2 z-40`}
        style={{ opacity: canNext ? 1 : 0.35 }}
      >
        <img src={rightArrow} alt="right" className="w-12 h-12" />
      </button>

      <div className="relative perspective-1000">
        <div
          className={`relative w-full h-[420px] bg-transparent flex items-stretch`}
          aria-hidden={isFlipping}
        >

          <div className={`w-1/2 p-4`}>
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

          <div className="w-[10px] flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[6px] h-40 bg-pink-200 rounded"></div>
            </div>
          </div>

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
