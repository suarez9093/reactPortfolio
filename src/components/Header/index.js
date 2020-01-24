import React from 'react';
import {portfolioImage, infoContainer} from "./css/header.module.scss";
import headshot from "./img/headshot.png";

function Header(props) {
  return (
    <header>
      <img id={portfolioImage} src={headshot} alt="headshot"/>
      <div className={infoContainer}>
        <ul>
          <li>About Me</li>
          <li>Resume</li>
        </ul>
      </div>
    </header>
  );
}

export default Header