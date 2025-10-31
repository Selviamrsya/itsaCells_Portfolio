import React, { useState } from "react";
import { projects } from "./data";
import { useNavigate } from "react-router-dom";
import bookFrame from "../../assets/book-frame.png";
import backButton from "../../assets/close-button.png";
import backButtonHover from "../../assets/close-hover.png";
import seeMoreButton from "../../assets/back.png";
import seeMoreButtonHover from "../../assets/back-hover.png";
import overviewTitle from "../../assets/overview-title.png";
import logo from "../../assets/logo.png";
import fallingFlower from "../../assets/flower.png";
import bgImage from "../../assets/background/Background-2.png";

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
              width: `35px`,
              opacity: 0, 
              '--horizontal-offset': pos.horizontalOffset,
            }}
          />
        ))}
      </div>

      <img
        src={logo}
        alt="logo"
        className="hover:scale-110 absolute top-8 right-8 w-40 transition-transform z-30"
      />

      <div className="absolute top-4 md:top-6 left-4 md:left-6 z-50 flex gap-2 md:gap-3">
        <button
          onClick={() => navigate("/")}
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
        >
          <img
            src={isBackHovered ? backButtonHover : backButton}
            alt="Close"
            className="w-12 h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 hover:scale-110  object-contain transition-all duration-300"
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
            className="w-12 h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 hover:scale-110 object-contain transition-all duration-300"
          />
        </button>
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-start pt-4 md:pt-3 relative z-20">
        <div className="text-center relative z-20">
          <img
            src={overviewTitle}
            alt="Overview Project"
            className="mx-auto w-64 h-16 md:w-100 md:h-18 object-contain"
          />
        </div>

        <div className="relative w-full max-w-7xl lg:max-w-9xl h-[95vh] md:h-[70vh] min-h-[700px] flex items-center justify-center">
          <img
            src={bookFrame}
            alt="Book Frame"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
          />

          <div className="relative w-[80%] md:w-[95%] h-[85%] md:h-[90%] z-20 py-4 md:py-8 px-4 md:px-10">
            <div className="h-full overflow-y-auto pr-2 md:pr-3 custom-scrollbar">
              <div className="space-y-3 md:space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={project.id || index}
                    className="bg-white/95 rounded-2xl p-4 md:p-5 shadow-lg border-2 border-[#99805E] hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-2xl font-bold text-[#f790b1] mb-1 md:mb-2">
                          {index + 1}. {project.name}
                        </h3>
                        <p className="text-[#99805E] text-xs md:text-xl mb-2 md:mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex gap-1 md:gap-2 flex-wrap">
                          {project.tools.map(tool => (
                            <span
                              key={tool}
                              className="px-2 py-1 md:px-3 md:py-1 bg-[#fff3b2] text-[#f790b1] text- rounded-full font-medium"
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
            opacity: 0.8; 
          }
          50% {
            transform: translateY(50vh) translateX(var(--horizontal-offset)) rotate(90deg);
          }
          90% {
            opacity: 0.2;
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