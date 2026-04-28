import React from 'react'
import "./about.css"
import Image from "../../assets/avatar-2.svg"

const AboutBox = () => {
  return (
   <div className="about__boxes grid">
     <div className="about__box">
        <i className="about__icon icon-rocket"></i>

        <div>
            <h3 className="about__title">63</h3>
            <span className="about_subtitle ">Projects</span>
        </div>
    </div>
    <div className="about__box">
        <i className="about__icon icon-loop"></i>

        <div>
            <h3 className="about__title">198</h3>
            <span className="about_subtitle ">Projects</span>
        </div>
    </div>
    <div className="about__box">
        <i className="about__icon icon-notebook"></i>

        <div>
            <h3 className="about__title">143</h3>
            <span className="about_subtitle ">Books</span>
        </div>
    </div>
    <div className="about__box">
        <i className="about__icon icon-social-spotify"></i>

        <div>
            <h3 className="about__title">16,777</h3>
            <span className="about_subtitle ">Minutes </span>
        </div>
    </div>
   
   
   </div>
  )
}

export default AboutBox
