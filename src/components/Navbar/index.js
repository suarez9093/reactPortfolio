import React, { useState, useEffect } from 'react';
import "./css/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"



function NavbarComponent() {

  const [navToggle, setNavToggle] = useState(false);

  console.log(navToggle)

  function toggleNav() {
    setNavToggle(toggle => !toggle)
    if (navToggle) {
      // document.getElementById("main").style.marginLeft = "25%";
      document.getElementById("mySidebar").style.width = "25%";
      document.getElementById("mySidebar").style.display = "block";
    } else if (!navToggle) {
      // document.getElementById("main").style.marginLeft = "0%";
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("openNav").style.display = "inline-block";
    }

  }


  return (
    <div>
      <nav id="sideBar">
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithubSquare} className="icons" />
            <FontAwesomeIcon icon={faGithubSquare} className="icons" />
            <FontAwesomeIcon icon={faGithubSquare} className="icons" />
            <FontAwesomeIcon icon={faGithubSquare} className="icons" />
          </li>


        </ul>
      </nav>
    </div>




  );
};

export default NavbarComponent;