import React, { useEffect } from 'react';
import './home.css';
import Me from "../../assets/pfp2.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "<span>Cloud</span><br/><span>Networking</span><br/><span>Software</span>"
      ],
      typeSpeed: 100,
      backSpeed: 100, 
      backDelay: 1000, 
      startDelay: 500, 
      loop: true, 
      showCursor: false, 
      smartBackspace: false, 
      contentType: 'html', 
    };

    const typed = new Typed(".home__education", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="Profile" className="home__img" />
        <h1 className="home__name">Deepak K</h1>
        <span className="home__education"></span>
        <HeaderSocials />
        <div className="app">
        <div className="tag-list">
  <div className="loop-slider" style={{ '--duration': '15951ms', '--direction': 'normal' }}>
    <div className="inner">
      <div className="tag"><span>#</span> C</div>
      <div className="tag"><span>#</span> Java</div>
      <div className="tag"><span>#</span> Python</div>
      <div className="tag"><span>#</span> JavaScript</div>
      <div className="tag"><span>#</span> React</div>
      <div className="tag"><span>#</span> AWS</div>
      <div className="tag"><span>#</span> Database </div>
      <div className="tag"><span>#</span> WebDev</div>
      <div className="tag"><span>#</span> Bash</div>
      <div className="tag"><span>#</span> UIUX </div>
      <div className="tag"><span>#</span> HTML</div>
      <div className="tag"><span>#</span> CSS</div>
    </div>
  </div>
  
  <div className="loop-slider" style={{ '--duration': '19260ms', '--direction': 'reverse' }}>
    <div className="inner">
      <div className="tag"><span>#</span> SQL</div>
      <div className="tag"><span>#</span> Node.js</div>
      <div className="tag"><span>#</span> TypeScript</div>
      <div className="tag"><span>#</span> TailwindCSS</div>
      <div className="tag"><span>#</span> GraphQL</div>
      <div className="tag"><span>#</span> Docker</div>
      <div className="tag"><span>#</span> Kubernetes</div>
      <div className="tag"><span>#</span> REST</div>
      <div className="tag"><span>#</span> Firebase</div>
      <div className="tag"><span>#</span> Angular</div>
    </div>
  </div>


    
    <div className="fade"></div>
  </div>
</div>


        
        <a href="#contact" className="btn">Contact</a>

        
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
