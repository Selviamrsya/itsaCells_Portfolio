import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cityBg from "/assets/background/Background-2.png";
import bakery from "/assets/bakery.png";
import bunnyIdle from "/assets/bunny.png";
import bunnyJump from "/assets/bunnyJump.png";
import logo from "/assets/buttons/logo.png";
import { ProfileSection } from "../Profile";
import fallingFlower from "/assets/buttons/flower.png";

export const Home = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const jumpInterval = setInterval(() => {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }, 3000);
    return () => clearInterval(jumpInterval);
  }, []);

  const handleNavigate = (path) => {
    setShowButtons(false);
    setTimeout(() => navigate(path), 700);
  };

  const [flowerPositions] = useState(() => 
    [...Array(20)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      duration: `${6 + Math.random() * 6}s`,
      delay: `${Math.random() * 6}s`,
      horizontalOffset: `${Math.random() > 0.5 ? 15 : -15}px`,
    }))
  );

  return (
    <div
      className="relative w-full h-screen overflow-hidden transition-all duration-700"
      style={{
        backgroundImage: `url(${cityBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
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
              width: `25px`,
              opacity: 0, 
              '--horizontal-offset': pos.horizontalOffset,
            }}
          />
        ))}
      </div>

      <ProfileSection />

      <img
        src={logo}
        alt="logo"
        className="hover:scale-110 absolute top-2 right-4 md:top-12 md:right-8 w-24 md:w-48 transition-transform z-30"
      />
      
      <div className="absolute bottom-[50px] left-[5%] flex items-end gap-4">
        <img 
          src={bakery} 
          alt="bakery" 
          className="w-[600px] hidden lg:block" 
        />
        <img
          src={isJumping ? bunnyJump : bunnyIdle}
          alt="bunny"
          className={`mx-[150%] md:mx-[250%] lg:ml-0 w-[180px] transition-all duration-500 ${
            isJumping ? "-translate-y-14" : ""
          }`}
        />
      </div>

      <div
        className={`absolute -my-8 md:my-0 right-[10%] md:right-[10%] top-1/2 flex flex-col gap-4 md:gap-6 transform -translate-y-1/2 transition-all duration-700 z-20 ${
          showButtons ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <button
          onClick={() => handleNavigate("/game")}
          className="w-100 h-12 md:w-150 md:h-13 lg:w-240 lg:h-20 bg-[#f9b9c3] text-[#fff8e8] text-base md:text-lg lg:text-xl font-bold py-2 md:py-2 lg:py-4 rounded-full border-2 border-[#99805E] shadow-md hover:bg-[#f8a9b6] transition transform hover:scale-105"
        >
          Play Mini Game
        </button>

        <button
          onClick={() => handleNavigate("/projects")}
          className="w-100 h-12 md:w-150 md:h-13 lg:w-240 lg:h-20 bg-[#fff3b2] text-[#f8a9b6] text-base md:text-lg lg:text-xl font-bold py-2 md:py-2 lg:py-4 rounded-full border-2 border-[#99805E] shadow-md hover:bg-[#fff0a2] transition transform hover:scale-105"
        >
          See Project
        </button>
      </div>

      <style jsx>{`
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
};