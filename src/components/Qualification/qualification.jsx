import React from 'react';
import './qualification.css';

const Resume = () => {
  return (
<section id="qualification" className="qualification section">  
        <h2 className="section__title">Qualifications</h2>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification_active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content">
            <div className="qualification_data">
              <div className="qualification_info">
                <h3 className="qualification_title">Associate of Science in Computer Science</h3>
                <span className="qualification_subtitle">NOVA CC</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
              <div className="qualification_timeline">
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div className="qualification_info">
                <h3 className="qualification_title">Tech Advisor</h3>
                <span className="qualification_subtitle">Office Depot</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
                </div>
              </div>
              <div className="qualification_timeline">
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
          </div>

          <div className="qualification_content">
            <div className="qualification_data">
              <div className="qualification_info">
                <h3 className="qualification_title">Bachelors of Science in Computer Science</h3>
                <span className="qualification_subtitle">George Mason University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2023
                </div>
              </div>
              <div className="qualification_timeline">
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div className="qualification_info">
                <h3 className="qualification_title">World Market</h3>
                <span className="qualification_subtitle">Assistant Manager</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div className="qualification_timeline">
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
                
              </div>
              
            </div>
            
            
            <div className="qualification_data">
           
             
              <div className="qualification_timeline">
                <span className="qualification_rounder"></span>
                
              </div>
            </div>

            
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Resume;
