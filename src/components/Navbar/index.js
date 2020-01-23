import React from 'react';
import "./css/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"


function NavbarComponent() {

  return (
    <div>
      <nav id="sideBar">
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithubSquare} className="icons" />
            <FontAwesomeIcon icon={faLinkedin} className="icons" />
            <FontAwesomeIcon icon={faEnvelope} className="icons" />
            <FontAwesomeIcon icon={faMobileAlt} className="icons" />
          </li>
        </ul>
      </nav>
    </div>




  );
};

export default NavbarComponent;