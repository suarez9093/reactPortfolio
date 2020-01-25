import React from 'react';
import { header, container, intro, profileImage, portfolioImage, infoContainer } from "./css/header.module.scss";
import headshot from "./img/headshot.png";
import { Container, Row, Col } from "reactstrap";

function Header() {
  return (
    <header className={header}>
      {/* <div className={container}> */}
        {/* container */}
        <Container>
          <Row>

        <Col>
        <div className={intro}>
          <div className={profileImage}>
            <img id={portfolioImage} src={headshot} alt="headshot" />
          </div>
          <h2>Alex Suarez</h2>
          <h4>Full Stack Developer</h4>
          <ul>
            <li>
              <b>Phone :</b>
              720-240-6833
              </li>
            <li>
              <b>Email: </b>
              suarez9093@hotmail.com
            </li>
            <li>
              <button>View Resume</button>
              </li>
          </ul>
        
        </div>
        </Col>
        </Row>
        </Container>
      {/* </div> */}
      <div className={infoContainer}>
        {/* <ul>
          <li>About Me</li>
          <li>Resume</li>
        </ul> */}
      </div>
    </header>
  );
}

export default Header