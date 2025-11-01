import { useEffect, useState } from "react";
import logo from "/assets/buttons/logo.png";

export const LoadingScene = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1.5;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#d9f7f4]">
      <img
        src={logo}
        alt="ItsaCellsLogo"
        className="w-[360px] md:w-[480px] mb-12 drop-shadow-lg"
      />

      <div className="w-[70%] md:w-[45%] h-6 bg-[#f4e9b0] rounded-full border-2 border-[#b9936c] overflow-hidden relative">
        <div
          className="absolute left-0 top-0 h-full bg-[#f7c7b0] transition-all duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff4d6]/60 to-transparent animate-bar-shimmer"></div>
      </div>
    </div>
  );
};
