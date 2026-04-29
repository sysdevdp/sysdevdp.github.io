// src/App.js
import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Qualification from './components/Qualification/qualification';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/blog';
import Wordle from './components/Wordle/wordle';
import HamburgerMenu from './HamburgerMenu/hamburger';
import Footer from './components/footer/Footer'
import './App.css';
import AboutNew from './components/about_new/about_new';
const App = () => {
  const [showWordle, setShowWordle] = useState(false);

  const handlePlayWordle = () => {
    setShowWordle(true);
  };

  return (
    <>
      <ParticleBackground />
      <Sidebar />
      <main className="main">
        <Home />
      <AboutNew />
        {/*
         <About />
        <Services />
            <Qualification />
        <Portfolio />
        <Blog />
          <Footer />
              */}
    

      </main>

      {/* Hamburger Menu */}
      {/* <HamburgerMenu onPlayWordle={handlePlayWordle} /> */}

      {/* Wordle Game */}
      {showWordle && <Wordle onClose={() => setShowWordle(false)} />}
    </>
  );
};

export default App;
