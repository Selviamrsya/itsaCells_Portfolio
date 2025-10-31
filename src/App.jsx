import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/sections/Home";
import ProjectPage from "./components/sections/Project";
import Overview from "./components/sections/Overview";  
import Game from "./components/sections/Game";
import { LoadingScene } from "./components/LoadingScene";
import { useState } from "react";
import About from "./components/sections/About";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <BrowserRouter>
      {!isLoaded && <LoadingScene onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {isLoaded && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/game" element={<Game />} />
            <Route path="/about" element={<About />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}
