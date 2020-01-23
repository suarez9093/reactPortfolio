import React from 'react';
import "./css/header.css";
import headshot from "./img/headshot.png";

export default function Header() {
 
  return (
    <header>
      <img id="headshot" src={headshot} alt="headshot"/>
      <div className="info-container">
        <ul>
          <li>About Me</li>
        </ul>
      </div>
    </header>
  );
}