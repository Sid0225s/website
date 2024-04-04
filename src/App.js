import React from "react";
import "./App.css";
import Home from "./pages/Home.js";
import Div100vh from "react-div-100vh";
import Navbar from "./components/Navbar.js";
import gearImage from "./assets/icons/gear.png";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Events from "./pages/Events.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const generateXPosition = () => {
    return `${Math.floor(Math.random() * 98)}%`;
  };
  const generateYPosition = () => {
    return `${Math.floor(Math.random() * 98)}%`;
  };
  return (
    <BrowserRouter>
      <Div100vh className="relative w-full overflow-y-hidden">
        <Navbar />
        <Div100vh className="bg-black flex justify-center items-center overflow-hidden">
          <div className="gradient w-full min-w-[1400px] h-full min-h-[1400px] relative overflow-hidden">
            {[...Array(250)].map((_, i) => (
              <img key={i} src={gearImage} alt="tools" className="absolute w-[20px] opacity-30" style={{ top: generateYPosition(), left: generateXPosition() }} />
            ))}
          </div>
        </Div100vh>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Div100vh>
    </BrowserRouter>
  );
}
