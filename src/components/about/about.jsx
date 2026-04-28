import React from 'react';
import './about.css'
import Image from "../../assets/im3.jpg";
import AboutBox from './AboutBox';
const about = () => {
  return (
    <selection className="about container section" id = 'about'>
      <h2 className="section__title">
        About Me
      </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I’m an aspiring software engineer with a passion for networking, cloud computing, and cybersecurity.
              I’m dedicated to creating secure, scalable solutions and continuously expanding my skills to tackle challenges in these fields.</p>
               
            <a href="" className="btn" hredf>Download CV</a>
          
          </div>


          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Software Engineering</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>

            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number ">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>

            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Cloud </h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photo"></span>
              </div>

            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Database</h3>
                <span className="skills__number ">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage data"></span>
              </div>

            </div>

            
          </div>
        </div>
      </div>
      <AboutBox />
      
    </selection>
  )
}

export default about
