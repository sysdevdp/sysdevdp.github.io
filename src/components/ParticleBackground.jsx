import React, { useState, useEffect } from "react";

const ParticleBackground = () => {
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const [particleColor, setParticleColor] = useState(getRandomColor());
  const [isNightMode, setIsNightMode] = useState(true);

  const initializeParticles = (color) => {
    if (window.particlesJS) {
      console.log("Initializing particles with color:", color);
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 },
          },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: color,
            opacity: 0.4,
            width: 1.7,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
        },
        retina_detect: true,
      });
    }
  };

  const toggleColor = () => {
    const newColor = getRandomColor();
    setParticleColor(newColor);

    const particlesContainer = document.getElementById("particles-js");
    if (particlesContainer) {
      console.log("Clearing the container...");
      particlesContainer.innerHTML = ""; 
    }

    setTimeout(() => {
      console.log("Reinitializing particles...");
      initializeParticles(newColor);
    }, 100); 
  };

  const toggleNightMode = () => {
    setIsNightMode((prev) => !prev);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.async = true;

    script.onload = () => {
      console.log("Particles.js script loaded.");
      initializeParticles(particleColor);
    };

    script.onerror = () => {
      console.error("Error loading particles.js script.");
    };

    document.body.appendChild(script);

    return () => {
      const particlesContainer = document.getElementById("particles-js");
      if (particlesContainer) {
        console.log("Cleaning up particles...");
        particlesContainer.innerHTML = "";
      }
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (isNightMode) {
      root.style.setProperty('--body-color', '#151a22');
      root.style.setProperty('--text-color', '#f0f0f0');
      root.style.setProperty('--card-color', 'hsl(233, 22.10%, 30.20%)')
      root.style.setProperty('--navlink-color', 'white');
      root.style.setProperty('--first-color', 'hsl(252, 31.20%, 24.50%)')
      root.style.setProperty('--qual-color', 'white')

      
    } else {
      root.style.setProperty('--body-color', '#f0f0f0');
      root.style.setProperty('--text-color', '#151a22');
      root.style.setProperty('--card-color', 'hsl(235, 5.90%, 36.70%)')

      root.style.setProperty('--navlink-color', 'black');
      root.style.setProperty('--first-color', 'hsl(0, 79.80%, 42.70%)')
      root.style.setProperty('--qual-color', 'black')



    }
  }, [isNightMode]);

  return (
    <div>
      <div
        id="particles-js"
        style={{
          height: "100vh",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          backgroundColor: isNightMode ? "#151a22" : "#FFFFF0",
          transition: "background-color 0.3s ease",
        }}
      ></div>

      <button
        onClick={toggleColor}
        style={{
          position: "fixed",
          bottom: "10px",
          left: "20px",
          zIndex: 1000,
          padding: "10px",
          background: "transparent",
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
        }}
      >
        🎨
      </button>
        
      <button
        onClick={toggleNightMode}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "20px",
          zIndex: 1000,
          padding: "10px",
          background: "transparent",
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
        }}
      >
        {isNightMode ? "🌙" : "🌞"}
      </button>
    </div>
  );
};

export default ParticleBackground;
