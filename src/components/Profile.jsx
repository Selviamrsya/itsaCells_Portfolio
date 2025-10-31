import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profile.jpg";
import flowerIcon from "../assets/flower.png";
import flowerIcon2 from "../assets/flower2.png";

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
    <div className="absolute top-6 left-6 z-50">
      <div 
        className="relative bg-cover bg-center rounded-3xl border-4 bg-[#FFF9BD] border-[#99805E] p-3 min-w-[360px]"
      >
        <div className="relative flex items-center space-x-4">
          <div className="relative flex-shrink-0">
            <div className="relative w-25 h-25 rounded-2xl overflow-hidden border-4 border-[#99805E] hover:scale-110 transition-transform duration-300">
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
              className="group relative bg-[#FFA9B9] rounded-2xl px-4 py-2 border-3 border-[#99805E] hover:bg-[#f98fa3] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={flowerIcon2}
                    alt="flower"
                    className="w-7 h-7 mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  />
                </div>
                <span className="font-bold text-[#FFFCF7] text-xl tracking-wide truncate">
                  About Itsacells
                </span>
              </div>
            </button>

            <div 
              className="group relative bg-[#C0D27E] rounded-2xl px-4 py-2 border-3 border-[#99805E] hover:scale-105 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={flowerIcon}
                    alt="flower"
                    className="w-7 h-7 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"
                  />
                </div>
                <span className="font-bold text-[#FFFCF7] text-xl tracking-wide">
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