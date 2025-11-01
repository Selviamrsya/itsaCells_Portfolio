import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import flowerImg from "/assets/buttons/flower.png";
import bunny1 from "/assets/bunny1.png";
import bunny2 from "/assets/bunny2.png";
import bunny3 from "/assets/bunny3.png";
import bunny4 from "/assets/bunny4.png";
import bunny5 from "/assets/bunny5.png";
import bunny6 from "/assets/bunny6.png";
import bunnyIdle from "/assets/bunny.png";
import bunnyJump from "/assets/bunnyJump.png";
import backBtn from "/assets/buttons/close-button.png";
import backBtnHover from "/assets/buttons/close-hover.png";
import tutorialBtn from "/assets/buttons/tutorial-button.png";
import tutorialBtnHover from "/assets/buttons/tutorial-hover.png"; 
import startBtn from "/assets/buttons/start-button.png";
import startBtnHover from "/assets/buttons/start-hover.png"; 
import closeBtn from "/assets/buttons/close-button.png";
import closeBtnHover from "/assets/buttons/close-hover.png"; 
import bgGame from "/assets/background/Background-2.png";

const Game = () => {
  const navigate = useNavigate();
  const [bunnyX, setBunnyX] = useState(300);
  const [bunnyY, setBunnyY] = useState(0);
  const [flowers, setFlowers] = useState([]);
  const [score, setScore] = useState(0);
  const [frame, setFrame] = useState(0);
  const [facingRight, setFacingRight] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [jumpVelocity, setJumpVelocity] = useState(0);
  const [keys, setKeys] = useState({});
  const [gamePhase, setGamePhase] = useState('intro');
  const [countdown, setCountdown] = useState(3);
  const [showTutorial, setShowTutorial] = useState(false);
  
  const [isTutorialHovered, setIsTutorialHovered] = useState(false);
  const [isStartHovered, setIsStartHovered] = useState(false);
  const [isCloseHovered, setIsCloseHovered] = useState(false);
  const [isBackHovered, setIsBackHovered] = useState(false);

  const animationRef = useRef(null);
  const lastFrameTimeRef = useRef(0);
  const speedMultiplierRef = useRef(1);
  const idleTimeoutRef = useRef(null);
  
  const bunnyFrames = [bunny1, bunny2, bunny3, bunny4, bunny5, bunny6];

  useEffect(() => {
    if (gamePhase !== 'playing') return;
    const spawn = setInterval(() => {
      setFlowers((prev) => [
        ...prev,
        { 
          id: Date.now(), 
          x: Math.random() * (window.innerWidth - 80), 
          y: -30 
        },
      ]);
    }, 2000);
    return () => clearInterval(spawn);
  }, [gamePhase]);

  useEffect(() => {
    if (gamePhase !== 'playing') return;
    const fall = setInterval(() => {
      setFlowers((prev) =>
        prev
          .map((f) => ({ ...f, y: f.y + 1.5 }))
          .filter((f) => f.y < window.innerHeight - 60)
      );
    }, 40);
    return () => clearInterval(fall);
  }, [gamePhase]);

  useEffect(() => {
    if (gamePhase !== 'playing') return;
    const moveBunny = (timestamp) => {
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }
      
      const delta = timestamp - lastFrameTimeRef.current;
      
      if (delta > 50) {
        let moveAmount = 5;
        let currentlyMoving = false;
        
        if (keys.ArrowLeft || keys.ArrowRight) {
          currentlyMoving = true;
          speedMultiplierRef.current = Math.min(speedMultiplierRef.current + 0.1, 1.5);
          moveAmount *= speedMultiplierRef.current;
        } else {
          speedMultiplierRef.current = 1;
        }
        
        if (keys.ArrowLeft) {
          setBunnyX((x) => Math.max(0, x - moveAmount));
          setFacingRight(false);
          setFrame((f) => (f + 1) % bunnyFrames.length);
        }
        if (keys.ArrowRight) {
          setBunnyX((x) => Math.min(window.innerWidth - 120, x + moveAmount));
          setFacingRight(true);
          setFrame((f) => (f + 1) % bunnyFrames.length);
        }
        
        if (isJumping) {
          setJumpVelocity((vel) => vel - 1.0);
          setBunnyY((y) => Math.max(0, y + jumpVelocity));
          if (bunnyY <= 0 && jumpVelocity < 0) {
            setIsJumping(false);
            setJumpVelocity(0);
            setBunnyY(0);
          }
        }
        
        if (currentlyMoving !== isMoving) {
          setIsMoving(currentlyMoving);
        }
        
        if (currentlyMoving) {
          if (idleTimeoutRef.current) {
            clearTimeout(idleTimeoutRef.current);
            idleTimeoutRef.current = null;
          }
        } else {
          if (!idleTimeoutRef.current) {
            idleTimeoutRef.current = setTimeout(() => {
              setIsMoving(false);
            }, 100);
          }
        }
        
        lastFrameTimeRef.current = timestamp;
      }
      
      animationRef.current = requestAnimationFrame(moveBunny);
    };

    animationRef.current = requestAnimationFrame(moveBunny);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
    };
  }, [keys, isMoving, isJumping, jumpVelocity, bunnyY, gamePhase]);

  useEffect(() => {
    if (gamePhase !== 'playing') return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setKeys(prev => ({ ...prev, [e.key]: true }));
      }
      if ((e.key === " " || e.key === "ArrowUp") && !isJumping) {
        setIsJumping(true);
        setJumpVelocity(15);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setKeys(prev => ({ ...prev, [e.key]: false }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isJumping, gamePhase]);

  useEffect(() => {
    if (gamePhase !== 'playing') return;
    const checkCollision = () => {
      setFlowers((prevFlowers) => {
        if (prevFlowers.length === 0) return prevFlowers;
        
        const newFlowers = [];
        let caughtFlowers = 0;

        prevFlowers.forEach((flower) => {
          const bunnyLeft = bunnyX + 30;
          const bunnyRight = bunnyX + 90;
          const bunnyTop = window.innerHeight - 250 - bunnyY;
          const bunnyBottom = window.innerHeight - 100 - bunnyY;
          
          const flowerLeft = flower.x;
          const flowerRight = flower.x + 40;
          const flowerBottom = flower.y + 40;
          
          const caught = 
            flowerRight > bunnyLeft &&
            flowerLeft < bunnyRight &&
            flowerBottom > bunnyTop &&
            flower.y < bunnyBottom;
            
          if (caught) {
            caughtFlowers += 0.5;
          } else {
            newFlowers.push(flower);
          }
        });

        if (caughtFlowers > 0) {
          setScore(prev => prev + caughtFlowers);
        }
        return newFlowers;
      });
    };

    const collisionInterval = setInterval(checkCollision, 50);
    return () => clearInterval(collisionInterval);
  }, [bunnyX, bunnyY, gamePhase]);

  useEffect(() => {
    if (gamePhase !== 'countdown') return;
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGamePhase('playing');
    }
  }, [countdown, gamePhase]);

  const handleBackToHome = () => {
    navigate("/");
  };

  const startGame = () => {
    setGamePhase('countdown');
    setCountdown(3);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgGame})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        onClick={handleBackToHome}
        onMouseEnter={() => setIsBackHovered(true)}
        onMouseLeave={() => setIsBackHovered(false)}
        className="absolute top-6 left-6 z-50"
      >
        <img 
          src={isBackHovered ? backBtnHover : backBtn}
          alt="back" 
          className="w-12 h-12 md:w-15 md:h-15 hover:scale-105 drop-shadow-lg" 
        />
      </button>

      {gamePhase === 'playing' && (
        <div className="absolute top-5 right-6 flex items-center gap-3 bg-[#FFF9BD] px-4 py-2 rounded-full shadow-lg border-2 border-[#99805E]">
          <img src={flowerImg} alt="flower" className="w-8 h-8" />
          <span className="text-[#FFA9B9] font-bold text-xl">×{score}</span>
        </div>
      )}

      {gamePhase === 'playing' && flowers.map((f) => (
        <img
          key={f.id}
          src={flowerImg}
          alt="flower"
          className="absolute w-10 h-10"
          style={{ 
            left: f.x, 
            top: f.y 
          }}
        />
      ))}

      {gamePhase === 'playing' && (
        <img
          src={
            isJumping ? bunnyJump : 
            isMoving ? bunnyFrames[frame] : bunnyIdle
          }
          alt="bunny"
          className="absolute"
          style={{ 
            left: bunnyX,
            bottom: 40 + bunnyY,
            transform: facingRight ? 'scaleX(1)' : 'scaleX(-1)',
            width: isMoving ? '100px' : '120px'
          }}
        />
      )}

      {gamePhase === 'intro' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-40 gap-0 md:gap-4">
          <button
            onClick={() => setShowTutorial(true)}
            onMouseEnter={() => setIsTutorialHovered(true)}
            onMouseLeave={() => setIsTutorialHovered(false)}
          >
            <img 
              src={isTutorialHovered ? tutorialBtnHover : tutorialBtn} 
              alt="tutorial" 
              className="h-20 w-100 md:h-20 md:w-150 object-contain"
            />
          </button>
          
          <button
            onClick={startGame}
            onMouseEnter={() => setIsStartHovered(true)}
            onMouseLeave={() => setIsStartHovered(false)}
          >
            <img 
              src={isStartHovered ? startBtnHover : startBtn} 
              alt="start" 
              className="h-20 w-100 md:h-20 md:w-150 object-contain"
            />
          </button>
        </div>
      )}

      {showTutorial && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="bg-[#ffffff] backdrop-blur-sm p-6 md:p-12 rounded-2xl text-center w-[400px] md:w-[600px] border-3 border-[#99805E] shadow-2xl relative">
            <button
              onClick={() => setShowTutorial(false)}
              onMouseEnter={() => setIsCloseHovered(true)}
              onMouseLeave={() => setIsCloseHovered(false)}
              className="absolute -top-6 md:-top-8 -right-6 md:-right-8"
            >
              <img 
                src={isCloseHovered ? closeBtnHover : closeBtn} 
                alt="close" 
                className="w-12 h-12 md:h-15 md:w-15 hover:scale-110 object-contain"
              />
            </button>
            
            <h2 className="text-xl md:text-3xl font-bold mb-5 text-[#f790b1]">How to Play</h2>
            
            <div className="text-left space-y-6 text-[#99805E] text-sm md:text-lg">
              <p className="flex items-center">
                <span className="text-sm md:text-lg mr-4">1. </span>
                Use <span className="font-bold mx-2">← →</span> arrow keys to move left and right
              </p>
              <p className="flex items-center">
                <span className="text-sm md:text-lg mr-4">2. </span>
                Press <span className="font-bold mx-2">Space</span> or <span className="font-bold mx-2">↑</span> to jump
              </p>
              <p className="flex items-center">
                <span className="text-sm md:text-lg mr-4">3. </span>
                Catch as many falling flowers as you can!
              </p>
                <center>Enjoy your Game ^0^ !!!</center>
            </div>
          </div>
        </div>
      )}

      {gamePhase === 'countdown' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-40">
          <span
            className={`text-6xl font-bold text-pink-300 animate-pulse ${
              countdown === 0 ? 'text-green-400' : 'text-pink-300'
            }`}
          >
            {countdown === 0 ? 'Start!' : countdown}
          </span>
        </div>
      )}
    </div>
  );
};

export default Game;