import React from 'react';
import { header, intro, profileImage, portfolioImage, fontYellow, fontBlue, resumeLink, information, socialIcons, fontAwesomeIcon } from "./css/header.module.scss";
import "./css/header.css"
import headshot from "./img/headshot.png";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPaperclip } from "@fortawesome/free-solid-svg-icons"
import resume from "./resume/alex_suarez_resume.pdf";

function Header() {
  return (
    <header className={header}>
      <Container>
        <Row>
          <Col xs="2"></Col>
          <Col >
            <div className={intro}>
              <div className={profileImage}>
                <img id={portfolioImage} src={headshot} alt="headshot" />
              </div>
              <h2>Alex Suarez</h2>
              <h4 className={fontYellow}>Full Stack Developer</h4>
              <ul className={information}>
                <li>
                  <b>Phone: </b>
                  <a href="tel:720-240-6833">720-240-6833</a>
                </li>
                <li>
                  <b>Email: </b>
                  <a href="mailto:suarez9093@hotmail.com">
                    suarez9093@hotmail.com
                    </a>
                </li>
                <li>
                  {/* <a className={resumeLink} href={resume}>View Resume</a> */}
                </li>
              </ul>
              <ul className={socialIcons}>
                <li className={socialIcons}>
                  <a title="Github" href="https://github.com/suarez9093">
                    <FontAwesomeIcon className={fontAwesomeIcon} icon={faGithub} />
                  </a>
                </li>
                <li className={socialIcons}>
                  <a title="Instagram" href="https://www.instagram.com/suarez9093/">
                    <FontAwesomeIcon className={fontAwesomeIcon} icon={faInstagram} />
                  </a>
                </li>
                <li className={socialIcons}>
                  <a title="LinkedIn" href="https://www.linkedin.com/in/alexsuarez9093/">
                    <FontAwesomeIcon className={fontAwesomeIcon} icon={faLinkedin} />
                  </a>
                </li>
                <li className={socialIcons}>
                  <a title="Resume" href={resume}>
                    <FontAwesomeIcon className={fontAwesomeIcon} icon={faPaperclip} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs="2"></Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header