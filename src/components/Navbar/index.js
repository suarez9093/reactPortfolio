import React from 'react';
import "./css/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"


function NavbarComponent() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="http://www.github.com">
              <FontAwesomeIcon icon={faGithubSquare} className="icons" />
            </a>
            <a href="http://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} className="icons" />
            </a>
            <a href="mailto:suarez9093@hotmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="icons" />
            </a>
            <a href="tel:720-240-6833">
              <FontAwesomeIcon icon={faMobileAlt} id="phone" className="icons" />
            </a>
          </li>
        </ul>
      </nav>
    </div>




  );
};

export default NavbarComponent;