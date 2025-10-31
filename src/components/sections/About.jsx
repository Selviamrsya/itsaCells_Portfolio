import React, { useState } from "react";
import { aboutData } from "./dataAbout";
import { useNavigate } from "react-router-dom";
import bunny from "../../assets/bunnyChar.png";
import searchIcon from "../../assets/search.png";
import bubble1 from "../../assets/bubble1.png";
import bubble2 from "../../assets/bubble2.png";
import bubble3 from "../../assets/bubble3.png";
import bookFrame from "../../assets/book-frame.png";
import bgImage from "../../assets/background/Background-2.png";
import profilePic from "../../assets/profile.jpg";
import backButton from "../../assets/close-button.png";
import backButtonHover from "../../assets/close-hover.png";
import fallingFlower from "../../assets/flower.png";
import logo from "../../assets/logo.png"

import htmlHover from "../../assets/tools/html-hover.png";
import cssHover from "../../assets/tools/css-hover.png";
import jsHover from "../../assets/tools/js-hover.png";
import pythonHover from "../../assets/tools/python-hover.png";
import javaHover from "../../assets/tools/java-hover.png";
import mysqlHover from "../../assets/tools/mysql-hover.png";
import canvaHover from "../../assets/tools/canva-hover.png";
import cHover from "../../assets/tools/c-hover.png";

export default function About() {
  const navigate = useNavigate();
  const [showBubbles, setShowBubbles] = useState(false);
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const [flowerPositions] = useState(() =>
    [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${6 + Math.random() * 5}s`,
      delay: `${Math.random() * 6}s`,
      horizontalOffset: `${Math.random() > 0.5 ? 15 : -15}px`,
    }))
  );

  const hoverAssets = {
    HTML: htmlHover,
    CSS: cssHover,
    JavaScript: jsHover,
    Python: pythonHover,
    Java: javaHover,
    MySQL: mysqlHover,
    Canva: canvaHover,
    C: cHover,
  };
  

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden p-4 md:p-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    <img
      src={logo}
      alt="logo"
      className="hover:scale-110 absolute top-8 right-8 w-40 transition-transform z-30"
    />
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
              width: "35px",
              opacity: 0,
              "--horizontal-offset": pos.horizontalOffset,
            }}
          />
        ))}
      </div>

      <div className="absolute top-4 md:top-6 left-4 md:left-6 z-50">
        <button
          onClick={() => navigate("/")}
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
        >
          <img
            src={isBackHovered ? backButtonHover : backButton}
            alt="Back"
            className="h-15 w-15 md:h-18 md:w-18 object-contain hover:scale-110 hover:shadow-2xl transition-all duration-300"
          />
        </button>
      </div>

      <div className="relative w-full max-w-9xl h-[95vh] min-h-[600px] flex items-center justify-center overflow-y-auto">
        <img
          src={bookFrame}
          alt="Book Frame"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
        />

        <div className="relative w-[85%] md:w-[80%] lg:w-[75%] min-h-[750px] z-20 grid grid-cols-1 lg:grid-cols-6 gap-2 md:gap-0 ml-[3px]">
          
          <div className="lg:col-span-2 flex flex-col justify-between items-center p-4 md:p-4 space-y-4">
            <div className="flex flex-col items-center w-full">
              <h2 className="bg-[#FFA9B9] border-4 border-[#f4d4aa] text-[#FFFCF7] font-bold text-lg md:text-xl rounded-2xl py-3 px-6 w-full text-center shadow-md mb-16 hover:scale-105 hover:shadow-2xl">
                About Character
              </h2>
              <div className="relative">
                <img
                  src={bunny}
                  alt="bunny"
                  className="w-48 h-48 md:w-88 md:h-88 object-contain"
                />
                <button
                  onClick={() => setShowBubbles(!showBubbles)}
                  className="absolute -bottom-2 -left-2 bg-[#FFFCF7] border-4 border-[#99805E] rounded-2xl p-2 transition z-20 shadow-lg hover:scale-110"
                >
                  <img src={searchIcon} alt="search" className="w-12 h-12 object-contain" />
                </button>

                {showBubbles && (
                  <div className="absolute -top-16 left-0 right-0 pointer-events-none z-10">
                    <img src={bubble1} className="absolute top-12 -left-4 animate-float-slow w-30 opacity-90" alt="bubble1" />
                    <img src={bubble3} className="absolute top-14 -right-5 animate-float-medium w-32 opacity-90" alt="bubble3" />
                    <img src={bubble2} className="absolute -top-3 left-28 animate-float-medium w-30 opacity-90" alt="bubble2" />
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[#fffaf0] border-4 border-[#f4d4aa] rounded-3xl -ml-4 p-6 w-120 shadow-lg overflow-y-auto max-h-[255px] custom-scrollbar">
              <h2 className="text-[#FFA9B9] font-bold text-xl md:text-2xl -mt-2 mb-4 border-b border-[#f4d4aa] pb-1 text-center">
                Contact Person
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {aboutData.contact.map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={c.icon}
                        alt={c.text}
                        className="w-16 h-16 object-contain cursor-pointer transition-opacity duration-300 hover:opacity-0"
                        onClick={() => window.open(c.link, "_blank")}
                      />
                      <img
                        src={c.hoverIcon}
                        alt={c.text}
                        className="absolute top-0 left-0 w-16 h-16 object-contain cursor-pointer opacity-0 hover:scale-110 hover:opacity-100 transition-opacity duration-300"
                        onClick={() => window.open(c.link, "_blank")}
                      />
                    </div>
                    <span className="text-[#99805E] text-base font-semibold md:text-lg">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2 bg-white/85 rounded-2xl border-4 border-[#f4d4aa] p-6 mt-4 overflow-y-auto max-h-[745px] shadow-md">
            <div className="bg-[#fffaf0] border border-[#f4d4aa] rounded-lg p-4 mb-1 flex gap-4">
              <img
                src={profilePic}
                alt="profile"
                className="w-24 h-24 md:w-30 md:h-30 border-2 border-[#f4d4aa] object-cover rounded-lg flex-shrink-0 hover:scale-110 hover:shadow-xl"
              />
              <div className="flex-1">
                <h3 className="text-[#FFA9B9] font-bold text-2xl md:text-3xl mb-2">
                  {aboutData.name}
                </h3>
                <p className="text-[#99805E] text-sm md:text-base leading-relaxed">
                  {aboutData.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 flex-1">
              <div className="md:col-span-3 bg-[#fffdf8] border border-[#f4d4aa] rounded-xl p-4 shadow-sm overflow-y-auto custom-scrollbar max-h-[350px]">
                <h2 className="text-[#FFA9B9] font-bold text-xl md:text-2xl mb-2 border-b border-[#f4d4aa] pb-2">
                  Highlights
                </h2>
                <div className="mb-4">
                  <h3 className="text-[#FFA9B9] font-bold text-lg md:text-xl mb-3">Organizations</h3>
                  {aboutData.organizations.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-[#fffaf0] hover:bg-[#fef2e2] border border-[#f4d4aa] rounded-lg p-4 mb-2 transition-all duration-300"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-50 h-30 rounded-md object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[#9a7a5b] text-base md:text-xl font-semibold">{item.title}</p>
                        <p className="text-[#99805E] text-lg">{item.org}</p>
                        <p className="text-[#99805E] text-base mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-[#FFA9B9] font-bold text-lg md:text-xl mb-3">Work Experience</h3>
                  {aboutData.workExperience.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-[#fffaf0] hover:bg-[#fef2e2] border border-[#f4d4aa] rounded-lg p-3 mb-2 transition-all duration-300"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-50 h-30 rounded-md object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[#99805E] text-lg md:text-xl font-semibold">{item.title}</p>
                        <p className="text-[#99805E] text-lg">{item.org}</p>
                        <p className="text-[#99805E] text-base mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-2 bg-[#fffdf8]  border border-[#f4d4aa] rounded-xl p-4 shadow-sm overflow-y-auto custom-scrollbar max-h-[350px]">
                <h2 className="text-[#FFA9B9] font-bold text-xl md:text-2xl mb-3 border-b border-[#f4d4aa] pb-2">
                  Education & Languages
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#FFA9B9] font-semibold text-lg md:text-xl mb-2">Education</h3>
                    {aboutData.education.map((edu, i) => (
                      <div key={i} className="bg-[#fffaf0] border border-[#f4d4aa] rounded-lg p-4 mb-2 last:mb-0">
                        <p className="text-[#99805E] font-semibold text-xl">{edu.school}</p>
                        <p className="text-[#99805E] text-base">{edu.year}</p>
                        <p className="text-[#99805E] text-base">{edu.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-[#FFA9B9] font-semibold text-lg md:text-xl mb-2">Languages</h3>
                    {aboutData.languages.map((lang, i) => (
                      <div
                        key={i}className="flex justify-between bg-[#fffaf0] border border-[#f4d4aa] rounded-lg p-4 mb-2 last:mb-0">
                        <p className="text-[#99805E] text-lg font-semibold">{lang.name}</p>
                        <p className="text-[#99805E] text-base">{lang.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fffdf8] border border-[#f4d4aa] rounded-xl p-3 shadow-sm overflow-y-auto custom-scrollbar max-h-[300px]">
              <h2 className="text-[#FFA9B9] font-bold text-xl md:text-2xl mb-[12px] mt-[0px] border-b border-[#f4d4aa] pb-2">
                Software Skills
              </h2>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {aboutData.softwareSkills.map((item, i) => (
                  <div
                    key={i}
                    className="relative group"
                    onMouseEnter={() => setHoveredSkill(i)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`w-20 h-19 transition-all cursor-pointer ${
                        hoveredSkill === i
                          ? "opacity-0 scale-0"
                          : "opacity-100 scale-100"
                      }`}
                    />
                    <img
                      src={item.hoverIcon}
                      alt={item.name}
                      className={`absolute top-0 left-0 w-20 h-19 transition-all cursor-pointer ${
                        hoveredSkill === i
                          ? "opacity-100 scale-110"
                          : "opacity-0 scale-90"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f2b7c1; border-radius: 8px;
        }
        .animate-fall-smooth {
          animation: fall-smooth linear infinite;
        }
        @keyframes fall-smooth {
          0% { transform: translateY(-200%) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          50% { transform: translateY(50vh) rotate(90deg); }
          100% { transform: translateY(110vh) rotate(180deg); opacity: 0; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-6px) }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-4px) }
        }
        .animate-float-slow { animation: float-slow 3s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}