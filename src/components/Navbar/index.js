import React from 'react';
import "./css/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"


function NavbarComponent() {

  return (
    <nav className="flex-container">
      <ul>
        <li><a href="https://github.com/suarez9093">
          <FontAwesomeIcon icon={faGithubSquare} className="icons square" />
        </a></li>
        <li><a href="https://www.linkedin.com/in/alexsuarez9093/">
          <FontAwesomeIcon icon={faLinkedin} className="icons square" />
        </a></li>
        <li><a href="mailto:suarez9093@hotmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icons" />
        </a></li>
        <li><a href="tel:720-240-6833">
          <FontAwesomeIcon icon={faMobileAlt} id="phone" className="icons" />
        </a></li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;