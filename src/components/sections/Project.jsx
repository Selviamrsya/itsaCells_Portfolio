import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "./data";
import closeBtn from "/assets/buttons/close-button.png";
import closeBtnHover from "/assets/buttons/close-hover.png";
import overviewBtn from "/assets/buttons/menu.png";
import overviewHoverBtn from "/assets/buttons/menu-hover.png";
import leftArrow from "/assets/buttons/arrow-left.png";
import leftArrowHover from "/assets/buttons/arrow-left-hover.png";
import rightArrow from "/assets/buttons/arrow-right.png";
import rightArrowHover from "/assets/buttons/arrow-right-hover.png";
import bookCover from "/assets/book-frame.png";
import fallingFlower from "/assets/buttons/flower.png";
import bgImage from "/assets/background/Background-2.png";
import seeMore from "/assets/buttons/see-more-button.png";
import seeMoreHover from "/assets/buttons/see-more-button-hover.png";
import logo from "/assets/buttons/logo.png";

import htmlIcon from "/assets/tools/html.png";
import htmlHoverIcon from "/assets/tools/html-hover.png";
import cssIcon from "/assets/tools/css.png";
import cssHoverIcon from "/assets/tools/css-hover.png";
import jsIcon from "/assets/tools/js.png";
import jsHoverIcon from "/assets/tools/js-hover.png";
import pythonIcon from "/assets/tools/python.png";
import pythonHoverIcon from "/assets/tools/python-hover.png";
import javaIcon from "/assets/tools/java.png";
import javaHoverIcon from "/assets/tools/java-hover.png";
import mysqlIcon from "/assets/tools/mysql.png";
import mysqlHoverIcon from "/assets/tools/mysql-hover.png";
import figmaIcon from "/assets/tools/figma.png";
import figmaHoverIcon from "/assets/tools/figma-hover.png";
import canvaIcon from "/assets/tools/canva.png";
import canvaHoverIcon from "/assets/tools/canva-hover.png";
import cIcon from "/assets/tools/c.png";
import cHoverIcon from "/assets/tools/c-hover.png";

const toolsMap = {
  "HTML": { icon: htmlIcon, hover: htmlHoverIcon },
  "CSS": { icon: cssIcon, hover: cssHoverIcon },
  "JS": { icon: jsIcon, hover: jsHoverIcon },
  "JavaScript": { icon: jsIcon, hover: jsHoverIcon },
  "Python": { icon: pythonIcon, hover: pythonHoverIcon },
  "Java": { icon: javaIcon, hover: javaHoverIcon },
  "MySQL": { icon: mysqlIcon, hover: mysqlHoverIcon },
  "Figma": { icon: figmaIcon, hover: figmaHoverIcon },
  "Canva": { icon: canvaIcon, hover: canvaHoverIcon },
  "C": { icon: cIcon, hover: cHoverIcon }
};

export default function ProjectPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("next");
  const [isCloseHovered, setIsCloseHovered] = useState(false);
  const [isOverviewHovered, setIsOverviewHovered] = useState(false);
  const [isArrowLeftHovered, setIsArrowLeftHovered] = useState(false);
  const [isArrowRightHovered, setIsArrowRightHovered] = useState(false);
  
  const [flowerPositions] = useState(() => 
    [...Array(20)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      duration: `${6 + Math.random() * 6}s`,
      delay: `${Math.random() * 6}s`,
      horizontalOffset: `${Math.random() > 0.5 ? 15 : -15}px`,
    }))
  );

  const spreads = useMemo(() => {
    const result = [];
    for (let i = 0; i < projects.length; i += 2) {
      result.push([projects[i], projects[i + 1] || null]);
    }
    return result;
  }, []);

  const currentSpread = spreads[currentPage] || [null, null];
  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < spreads.length - 1;

  const handleFlip = (direction) => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDirection(direction > 0 ? "next" : "prev");

    setTimeout(() => {
      setCurrentPage((prev) => prev + direction);
      setIsFlipping(false);
    }, 1000);
  };

  return (
    <div 
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
              width: `25px`,
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
        
      <img
        src={bookCover}
        alt="book cover"
        className="absolute w-0 md:w-[100vw] md:max-w-[1200px] md:h-[95vh] md:max-h-[950px] object-contain drop-shadow-2xl z-20"
      />

      <div className="absolute top-4 md:top-6 left-4 md:left-6 z-50 flex md:gap-2">
        <button
          onClick={() => navigate("/")}
          onMouseEnter={() => setIsCloseHovered(true)}
          onMouseLeave={() => setIsCloseHovered(false)}
        >
          <img 
            src={isCloseHovered ? closeBtnHover : closeBtn} 
            alt="close" 
            className="w-9 h-9 lg:w-12 lg:h-12 object-contain drop-shadow-2xl hover:shadow-2xl hover:scale-110"
          />
        </button>

        <button
          onClick={() => navigate("/overview")}
          onMouseEnter={() => setIsOverviewHovered(true)}
          onMouseLeave={() => setIsOverviewHovered(false)}
        >
          <img 
            src={isOverviewHovered ? overviewHoverBtn : overviewBtn} 
            alt="overview" 
            className="w-9 h-9 lg:w-12 lg:h-12 object-contain drop-shadow-2xl hover:shadow-2xl hover:scale-110"
          />
        </button>
      </div>

      <div className="relative flex w-[85vw] max-w-[1100px] h-[80vh] z-30">
        <div className="absolute left-0 top-20 md:top-0 w-[50%] h-80vh md:h-full page-base rounded-l-2xl p-4 md:p-2 lg:p-4">
          {currentSpread[0] ? (
            <ProjectCard 
              project={currentSpread[0]} 
              side="left" 
            />
          ) : (
            <EmptyPage />
          )}
        </div>

        <div className="absolute right-0 top-20 md:top-0 w-[49.9%] h-80vh md:h-full page-base rounded-r-2xl p-4 md:p-2 lg:p-4">
          {currentSpread[1] ? (
            <ProjectCard 
              project={currentSpread[1]} 
              side="right" 
            />
          ) : (
            <EmptyPage />
          )}
        </div>

        {isFlipping && (
          <div
            className={`absolute w-[50%] top-20 md:top-0 h-80vh md:h-full page-base rounded-2xl p-4 md:p-5 lg:p-6 book-transform-3d z-40 ${
              flipDirection === "next"
                ? "left-1/2 origin-left book-flip-next"
                : "left-0 origin-right book-flip-prev"
            }`}
          >
            {flipDirection === "next"
              ? spreads[currentPage + 1]?.[0]
                ? <ProjectCard project={spreads[currentPage + 1][0]} side="right" />
                : <EmptyPage />
              : spreads[currentPage - 1]?.[1]
              ? <ProjectCard project={spreads[currentPage - 1][1]} side="left" />
              : <EmptyPage />}
          </div>
        )}
      </div>

      <button
        onClick={() => handleFlip(-1)}
        disabled={!canGoPrev || isFlipping}
        onMouseEnter={() => setIsArrowLeftHovered(true)}
        onMouseLeave={() => setIsArrowLeftHovered(false)}
        className={`absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
          canGoPrev ? "opacity-100" : "opacity-30 cursor-not-allowed"
        }`}
      >
        <img 
          src={isArrowLeftHovered ? leftArrowHover : leftArrow} 
          alt="prev" 
          className="w-10 h-10 lg:w-15 lg:h-15 hover:scale-110"
        />
      </button>

      <button
        onClick={() => handleFlip(1)}
        disabled={!canGoNext || isFlipping}
        onMouseEnter={() => setIsArrowRightHovered(true)}
        onMouseLeave={() => setIsArrowRightHovered(false)}
        className={`absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
          canGoNext ? "opacity-100" : "opacity-30 cursor-not-allowed"
        }`}
      >
        <img 
          src={isArrowRightHovered ? rightArrowHover : rightArrow} 
          alt="next" 
          className="w-10 h-10 lg:w-15 lg:h-15 hover:scale-110"
        />
      </button>

      <div className="absolute bottom-2 md:bottom-2 text-[#99805E] font-semibold text-xs md:text-sm lg:text-base bg-[#FFFCF7] px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-xl shadow-md border-2 border-[#99805E] z-40">
        Page {currentPage + 1} of {spreads.length}
      </div>

      <style jsx>{`
        .page-base {
          background: linear-gradient(180deg, #fffdfb 0%, #fff6f7 100%);
          border: 5px solid #FFA9B9;
          box-shadow: inset 0 0 10px #ffe5e5, 4px 4px 12px rgba(0,0,0,0.1);
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

const ProjectCard = ({ project, side }) => {
  const [hoveredTools, setHoveredTools] = useState({});
  const [isSeeMoreHovered, setIsSeeMoreHovered] = useState(false);

  const getToolIcon = (tool) => toolsMap[tool]?.icon || `/assets/tools/${tool}.png`;
  const getToolHoverIcon = (tool) => toolsMap[tool]?.hover || `/assets/tools/${tool}-hover.png`;

  const handleToolHover = (tool, isHovered) => {
    setHoveredTools(prev => ({
      ...prev,
      [tool]: isHovered
    }));
  };

  return (
    <div className="flex flex-col h-full bg-[#fffafc] rounded-xl p-1">
      <div className="mb-1 md:mb-3">
        <h1 className="text-[#a4b247] font-bold text-base md:text-xl line-clamp-2 leading-tight">
          {project.name}
        </h1>
      </div>

      <div className="mb-0 md:mb-3">
        <img
          src={project.image}
          alt={project.name}
          className="rounded-xl shadow-md w-[95%] h-[100px] lg:h-[220px] object-cover transition-all duration-300 transform hover:scale-105"
        />
      </div>

      <div className="mb-1 flex-grow">
        <h2 className="text-[#FFA9B9] font-semibold text-base mt-2 md:mt-0 md:text-lg">Description</h2>
        <div className="h-[60px] md:h-[50px] overflow-y-auto pr-2 custom-scrollbar">
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="mb-0 md:mb-4">
        <h2 className="text-[#FFA9B9] font-semibold text-base md:text-xl mb-1">Tools</h2>
        <div className="flex items-center gap-1 md:gap-2 flex-wrap">
          {project.tools.map((tool) => (
            <img
              key={tool}
              src={hoveredTools[tool] ? getToolHoverIcon(tool) : getToolIcon(tool)}
              alt={tool}
              className="w-8 h-8 md:w-12 md:h-12 transition-all hover:scale-110 duration-300 cursor-pointer"
              title={tool}
              onMouseEnter={() => handleToolHover(tool, true)}
              onMouseLeave={() => handleToolHover(tool, false)}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-0 pt-0 flex justify-center">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsSeeMoreHovered(true)}
          onMouseLeave={() => setIsSeeMoreHovered(false)}
          className="transition-all duration-300 transform hover:scale-105"
        >
          <img 
            src={isSeeMoreHovered ? seeMoreHover : seeMore} 
            alt="See More" 
            className="w-200 h-8 md:w-250 md:h-15 object-contain"
          />
        </a>
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
      `}</style>
    </div>
  );
};

const EmptyPage = () => (
  <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-60">
    <p className="text-sm md:text-base lg:text-lg">No Project</p>
  </div>
);