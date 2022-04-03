import React from 'react';
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>
          <nav>
            <a
              href="https://www.linkedin.com/in/abidurrahmandipta/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/dipta3214" target="_blank">
              <FaGithub />
            </a>
            <a href="mailto:rahmanabid083@gmail.com">
              <FaMailBulk />
            </a>
          </nav>

          <div className="footer-credits">
            <h1>Abidur Rahman Dipta</h1>
            <h2>FullStack Developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
