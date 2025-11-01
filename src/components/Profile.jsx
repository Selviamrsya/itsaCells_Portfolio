import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "/assets/profile.jpg";
import flowerIcon from "/assets/buttons/flower.png";
import flowerIcon2 from "/assets/buttons/flower-2.png";

export const ProfileSection = () => {
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const formattedDate = today
      .toLocaleDateString("en-GB")
      .replace(/\//g, " / ");
    setDate(formattedDate);
  }, []);

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50">
      <div 
        className="relative bg-cover bg-center rounded-2xl border-2 bg-[#FFF9BD] border-[#99805E] p-2 md:p-3 min-w-[100px]"
      >
        <div className="relative flex items-center space-x-2">
          <div className="relative flex-shrink-0">
            <div className="relative w-18 h-18 rounded-2xl overflow-hidden border-2 border-[#99805E] hover:scale-105 transition-transform duration-300">
              <img
                src={profilePic}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2 flex-1 min-w-0">
            <button 
              onClick={handleAboutClick}
              className="group relative bg-[#FFA9B9] rounded-2xl px-4 py-1 border-2 border-[#99805E] hover:bg-[#f98fa3] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={flowerIcon2}
                    alt="flower"
                    className="w-4 md:w-4 h-4 md:h-4 mr-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  />
                </div>
                <span className="font-bold text-[#FFFCF7] text-sm md:text-base tracking-wide truncate">
                  About Itsacells
                </span>
              </div>
            </button>

            <div 
              className="group relative bg-[#C0D27E] rounded-2xl px-4 py-1 border-2 border-[#99805E] hover:scale-105 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={flowerIcon}
                    alt="flower"
                    className="w-4 md:w-4 h-4 md:h-4 mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"
                  />
                </div>
                <span className="font-bold text-[#FFFCF7] text-sm md:text-base tracking-wide">
                  {date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};