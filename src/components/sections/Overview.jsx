import React, { useState } from "react";
import { projects } from "./data";
import { useNavigate } from "react-router-dom";
import bookFrame from "/assets/book-frame.png";
import backButton from "/assets/buttons/close-button.png";
import backButtonHover from "/assets/buttons/close-hover.png";
import seeMoreButton from "/assets/buttons/back.png";
import seeMoreButtonHover from "/assets/buttons/back-hover.png";
import overviewTitle from "/assets/buttons/overview-title.png";
import logo from "/assets/buttons/logo.png";
import fallingFlower from "/assets/buttons/flower.png";
import bgImage from "/assets/background/Background-2.png";

export default function Overview() {
  const navigate = useNavigate();
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);

  const [flowerPositions] = useState(() =>
    [...Array(20)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      duration: `${6 + Math.random() * 6}s`,
      delay: `${Math.random() * 4}s`,
      horizontalOffset: `${Math.random() > 0.5 ? 15 : -15}px`,
    }))
  );

  return (
    <div
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {flowerPositions.map((pos, i) => (
          <img
            key={i}
            src={fallingFlower}
            alt="falling flower"
            className="absolute animate-fall-smooth will-change-transform"
            style={{
              left: pos.left,
              animationDelay: pos.delay,
              animationDuration: pos.duration,
              width: `30px`,
              opacity: 0, 
              '--horizontal-offset': pos.horizontalOffset,
            }}
          />
        ))}
      </div>

      <img
        src={logo}
        alt="logo"
        className="hover:scale-110 absolute top-2 right-4 md:top-8 md:right-8 w-24 md:w-40 transition-transform z-30"
      />

      <div className="absolute top-4 md:top-6 left-4 md:left-6 z-50 flex gap-1 md:gap-2">
        <button
          onClick={() => navigate("/")}
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
        >
          <img
            src={isBackHovered ? backButtonHover : backButton}
            alt="Close"
            className="w-9 h-9 md:w-12 md:h-12 hover:scale-110  object-contain transition-all duration-300"
          />
        </button>

        <button
          onClick={() => navigate("/projects")}
          onMouseEnter={() => setIsSeeMoreHovered(true)}
          onMouseLeave={() => setIsSeeMoreHovered(false)}
        >
          <img
            src={isSeeMoreHovered ? seeMoreButtonHover : seeMoreButton}
            alt="See More"
            className="w-9 h-9 md:w-12 md:h-12 hover:scale-110 object-contain transition-all duration-300"
          />
        </button>
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-start pt-4 md:pt-3 relative z-20">
        <div className="text-center relative z-20">
          <img
            src={overviewTitle}
            alt="Overview Project"
            className="mx-auto mt-10 -mb-30 md:mt-5 md:mb-0 w-48 h-16 md:w-60 md:h-12 object-contain hover:scale-110"
          />
        </div>

        <div className="relative w-full max-w-7xl lg:max-w-9xl h-[80vh] flex items-center justify-center">
          <img
            src={bookFrame}
            alt="Book Frame"
            className="absolute inset-0 w-full h-0 md:h-600px lg:h-full object-contain pointer-events-none z-10"
          />

          <div className="relative w-[95%] md:w-[75%] h-[70%] md:h-[85%] z-20 md:py-2 px-8">
            <div className="h-full overflow-y-auto pr-2 mt-10 md:mt-0 md:pr-3 custom-scrollbar">
              <div className="space-y-3 md:space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={project.id || index}
                    className="bg-white/95 rounded-2xl p-4 shadow-lg border-2 border-[#99805E] hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-bold text-[#f790b1]">
                          {index + 1}. {project.name}
                        </h3>
                        <p className="text-[#99805E] text-xs md:text-sm mb-1 md:mb-2 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex gap-1 md:gap-2 flex-wrap">
                          {project.tools.map(tool => (
                            <span
                              key={tool}
                              className="px-2 py-1 md:px-5 md:py-1 bg-[#fff3b2] text-[#f790b1] rounded-full text-xs"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(241, 241, 241, 0.5);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f790b1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f8a9b6;
        }

        @keyframes fall-smooth {
          0% {
            transform: translateY(-200%) translateX(0) rotate(0deg); 
            opacity: 0;
          }
          1% {
            opacity: 0;
          }
          10% {
            opacity: 0.9; 
          }
          50% {
            transform: translateY(50vh) translateX(var(--horizontal-offset)) rotate(90deg);
          }
          80%{
            opacity:0;
          }
          100% {
            transform: translateY(110vh) translateX(0) rotate(180deg);
            opacity: 0;
          }
        }
        .animate-fall-smooth {
          animation: fall-smooth linear infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}