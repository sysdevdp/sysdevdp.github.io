import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer::before"></div> {/* Separator line */}

      <div className="footer-copyright">
          <p>&#169; 2025 Deepak Kumar. All Rights Reserved.</p>
        </div>
 
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://www.instagram.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/sysdevdp" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/dkumar77/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
    
      </div>
    </footer>
  );
}

export default Footer;
