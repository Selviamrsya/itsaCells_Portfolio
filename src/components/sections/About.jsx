import React, { useState } from "react";
import { aboutData } from "./dataAbout";
import { useNavigate } from "react-router-dom";
import bunny from "/assets/bunnyChar.png";
import searchIcon from "/assets/buttons/search.png";
import bubble1 from "/assets/bubble1.png";
import bubble2 from "/assets/bubble2.png";
import bubble3 from "/assets/bubble3.png";
import bookFrame from "/assets/book-frame.png";
import bgImage from "/assets/background/Background-2.png";
import profilePic from "/assets/profile.jpg";
import backButton from "/assets/buttons/close-button.png";
import backButtonHover from "/assets/buttons/close-hover.png";
import fallingFlower from "/assets/buttons/flower.png";
import logo from "/assets/buttons/logo.png"

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

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden p-2 sm:p-4 md:p-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={logo}
        alt="logo"
        className="w-20 sm:w-28 md:w-32 hover:scale-105 absolute top-4 right-4 sm:top-8 sm:right-8 transition-transform z-30"
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
              width: "25px",
              opacity: 0,
              "--horizontal-offset": pos.horizontalOffset,
            }}
          />
        ))}
      </div>

      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 z-50">
        <button
          onClick={() => navigate("/")}
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
        >
          <img
            src={isBackHovered ? backButtonHover : backButton}
            alt="Back"
            className="h-10 w-10 md:h-12 md:w-12 object-contain hover:scale-110 hover:shadow-2xl transition-all duration-300"
          />
        </button>
      </div>

      <div className="relative w-full max-w-9xl h-[95vh] flex items-center justify-center overflow-y-auto">
        <img
          src={bookFrame}
          alt="Book Frame"
          className="absolute inset-0 w-0 md:w-full md:h-full object-contain pointer-events-none z-10"
        />

        <div className="relative w-[95%] h-[100%] md:w-[75%] lg:w-[70%] lg:h-[70%] min-h-[500px] z-20 grid grid-cols-1 lg:grid-cols-6 gap-2 md:gap-0 mb-[50px] lg:mb-[100px]">

          <div className="lg:col-span-2 flex flex-col justify-between items-center p-2 md:p-4 space-y-4">
            <div className="flex flex-col items-center w-full">
              <h2 className="bg-[#FFA9B9] border-2 border-[#f4d4aa] md:-ml-10 text-[#FFFCF7] font-bold text-sm md:text-lg rounded-3xl py-1 px-1 md:px-3 w-full text-center shadow-md mt-20 md:mt-0 mb-5 md:mb-16 hover:scale-105 hover:shadow-2xl">
                About Character
              </h2>
              <div className="relative">
                <img
                  src={bunny}
                  alt="bunny"
                  className="w-48 h-48 mt-10 md:mt-0 md:-ml-5 md:w-56 md:h-56 object-contain"
                />
                <button
                  onClick={() => setShowBubbles(!showBubbles)}
                  className="absolute bottom-2 left-4 md:-bottom-2 md:-left-4 bg-[#FFFCF7] border-2 border-[#99805E] rounded-xl md:rounded-2xl p-1 md:p-2 transition z-20 shadow-lg hover:scale-110" 
                >
                  <img src={searchIcon} alt="search" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                </button>

                {showBubbles && (
                  <div className="absolute -top-12 left-0 right-0 pointer-events-none z-10">
                    <img src={bubble1} className="absolute top-18 -left-2 md:top-8 md:-left-12 animate-float-slow w-18 lg:w-22 opacity-80" alt="bubble1" />
                    <img src={bubble3} className="absolute top-18 -right-4 md:top-8 md:-right-2 animate-float-medium w-20 lg:w-24 opacity-80" alt="bubble3" />
                    <img src={bubble2} className="absolute top-10 left-16 md:-top-2 md:left-10 animate-float-medium w-16 lg:w-20 opacity-80" alt="bubble2" />
                  </div>
                )}
              </div>
            </div>

            <div className="bg-[#fffaf0] border-2 border-[#f4d4aa] -ml-5 md:-ml-15 rounded-xl p-3 md:p-6 w-full shadow-lg max-h-[225px]">
              <h2 className="text-[#FFA9B9] font-bold text-lg md:text-lg -mt-1 md:-mt-3 mb-1 md:mb-2 border-b border-[#f4d4aa] pb-1 text-center">
                Contact Person
              </h2>
              <div className="grid grid-cols-1 gap-1">
                {aboutData.contact.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-2">
                    <div className="relative">
                      <img
                        src={c.icon}
                        alt={c.text}
                        className="w-7 h-7 md:w-9 md:h-9 object-contain cursor-pointer transition-opacity duration-300 hover:opacity-0" 
                        onClick={() => window.open(c.link, "_blank")}
                      />
                      <img
                        src={c.hoverIcon}
                        alt={c.text}
                        className="absolute top-0 left-0 w-7 h-7 md:w-9 md:h-9 object-contain cursor-pointer opacity-0 hover:scale-110 hover:opacity-100 transition-opacity duration-300"
                        onClick={() => window.open(c.link, "_blank")}
                      />
                    </div>
                    <span className="text-[#99805E] text-xs md:text-sm font-medium">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-4 flex flex-col gap-2 bg-white/85 rounded-2xl border-2 border-[#f4d4aa] p-3 md:p-4 mt-2 md:mt-5 mb-5 lg:-ml-3 overflow-y-auto custom-scrollbar w-full min-h-[750px] max-h-[70vh] lg:w-[738px] lg:min-h-[500px] lg:max-h-[885px] shadow-md"> 
            
            <div className="bg-[#fffaf0] border border-[#f4d4aa] rounded-lg p-2 md:p-3 mb-1 flex gap-3 md:gap-4">
              <img
                src={profilePic}
                alt="profile"
                className="w-12 h-12 md:w-24 md:h-24 border-2 border-[#f4d4aa] object-cover rounded-lg flex-shrink-0 hover:scale-110 hover:shadow-xl"
              />
              <div className="flex-1">
                <h3 className="text-[#FFA9B9] font-bold text-base md:text-lg">
                  {aboutData.name}
                </h3>
                <p className="text-[#99805E] text-xs md:text-sm leading-snug md:leading-relaxed">
                  {aboutData.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 flex-1">
              
              <div className="md:col-span-3 bg-[#fffdf8] border border-[#f4d4aa] rounded-xl p-3 md:p-4 shadow-sm overflow-y-auto custom-scrollbar max-h-[35vh] md:max-h-[250px]">
                <h2 className="text-[#FFA9B9] font-bold text-lg md:text-xl -mt-1 mb-1 border-b border-[#f4d4aa] pb-1">
                  Highlights
                </h2>
                <div className="mb-2">
                  <h3 className="text-[#FFA9B9] font-bold text-base md:text-lg mb-1">Organizations</h3>
                  {aboutData.organizations.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 md:gap-3 bg-[#fffaf0] hover:bg-[#fef2e2] border border-[#f4d4aa] rounded-lg p-2 md:p-3 mb-2 transition-all duration-300"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-10 h-10 md:w-35 md:h-25 rounded-md object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[#9a7a5b] text-sm md:text-base font-semibold">{item.title}</p>
                        <p className="text-[#99805E] text-xs">{item.org}</p>
                        <p className="text-[#99805E] text-xs mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-[#FFA9B9] font-bold text-base md:text-lg mb-1">Work Experience</h3>
                  {aboutData.workExperience.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 md:gap-3 bg-[#fffaf0] hover:bg-[#fef2e2] border border-[#f4d4aa] rounded-lg p-2 md:p-3 mb-2 transition-all duration-300"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-10 h-10 md:w-35 md:h-25 rounded-md object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[#99805E] text-sm md:text-base font-semibold">{item.title}</p>
                        <p className="text-[#99805E] text-xs">{item.org}</p>
                        <p className="text-[#99805E] text-xs mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-2 bg-[#fffdf8] border border-[#f4d4aa] rounded-xl p-3 md:p-4 shadow-sm overflow-y-auto custom-scrollbar max-h-[35vh] md:max-h-[250px]">
                <h2 className="text-[#FFA9B9] font-bold text-lg md:text-xl -mt-1 mb-1 border-b border-[#f4d4aa] pb-1">
                  Education & Languages
                </h2>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h3 className="text-[#FFA9B9] font-semibold text-base md:text-lg mb-1">Education</h3>
                    {aboutData.education.map((edu, i) => (
                      <div key={i} className="bg-[#fffaf0] border border-[#f4d4aa] rounded-lg p-2 md:p-3 mb-2 last:mb-0">
                        <p className="text-[#99805E] font-semibold text-xs md:text-sm">{edu.school}</p>
                        <p className="text-[#99805E] text-xs">{edu.year}</p>
                        <p className="text-[#99805E] text-xs">{edu.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-[#FFA9B9] font-semibold text-base md:text-lg -mt-1 md:-mt-2 mb-1">Languages</h3>
                    {aboutData.languages.map((lang, i) => (
                      <div
                        key={i}className="flex justify-between bg-[#fffaf0] border border-[#f4d4aa] rounded-lg p-2 mb-2 last:mb-0">
                        <p className="text-[#99805E] text-xs md:text-sm font-semibold">{lang.name}</p>
                        <p className="text-[#99805E] text-xs">{lang.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fffdf8] border border-[#f4d4aa] rounded-xl p-3 shadow-sm overflow-y-auto custom-scrollbar max-h-[25vh] md:max-h-[400px]">
              <h2 className="text-[#FFA9B9] font-bold text-lg md:text-xl mb-2 -mt-[3px] border-b border-[#f4d4aa] pb-1">
                Software Skills
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-2">
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
                      className={`w-12 h-10 md:w-20 md:h-15 transition-all cursor-pointer ${
                        hoveredSkill === i
                          ? "opacity-0 scale-0"
                          : "opacity-100 scale-100"
                      }`}
                    />
                    <img
                      src={item.hoverIcon}
                      alt={item.name}
                      className={`absolute top-0 left-0 w-12 h-10 md:w-20 md:h-15 transition-all cursor-pointer ${
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