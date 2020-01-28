import React from "react";
import { Container, Row, Col } from "reactstrap";
import { section, heading, myWorkColor, font, mernLogo, nodeLogo, mongoLogo, reactLogoPic, expressLogo } from "./css/about.module.scss";
// import mongo from "./img/mongodb.png";
// import express from "./img/express-logo.png";
// import reactLogo from "./img/react.jpg";
import mern from "./img/mern.png";

function About() {
  return (
    // <div className={section}>
    <Container >
      <Row>
        <Col xs="4">
          <div className={heading}>
            <h3><b>About Me</b></h3>
            <h6 className={myWorkColor}><b>Professional Path</b></h6>

          </div>
        </Col>
        <Col xs="8">
          <h6 className={font}>Results-driven Full Stack Web Developer applying strong technical skills toward building functional applications. Graduated with a certification in Full Stack Web Development from the University of Denver. I have built full-stack web applications and acquired strong knowledge in React, MYSQL, Express, Node.js, and JavaScript. When I venture down a path that I am passionate about, I focus all of my time and energy on achieving my goals. I’ve toured as a professional musician and have been a sponsored athlete competing in competitions. In times of adversity, I am the calmest. In fast-paced situations, I rely on logic to persevere when an application isn’t working as planned. I adapt quickly and can communicate effectively; this attribute was crucial to the success of working with a team to deliver projects with strict deadlines. I focus on small wins that make up the big picture which motivates me, in turn, to keep pursuing my passion. I love being given an obstacle; it allows me to use my technical abilities, past experiences, and strengths to push through and build something even more intuitive and creative than I’ve done in the past. </h6>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
     
      <Col xs="4"></Col>
        <Col xs="8">
          {/* <img src={mern} alt="logos" /> */}
          <div className={mern}></div>
        </Col>

      </Row>
    </Container>
    // </div>
  )

};
export default About;