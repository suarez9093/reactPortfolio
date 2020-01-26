/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { portfolioSection, section, heading, myWorkColor, portfolioFilter, current, portfolioLinks, projectContainer, thumbnail } from "./css/portfolio.module.scss";
import { Container, Row, Col } from "reactstrap";
import one from "./img/dbz.png";
import two from "./img/temp/2.jpg";
import three from "./img/temp/3.jpg";
import four from "./img/temp/4.jpg";
import five from "./img/temp/5.jpg";
import six from "./img/temp/6.jpg";
import seven from "./img/temp/7.jpg";
import eight from "./img/temp/8.jpg";
import nine from "./img/temp/9.jpg";
import ten from "./img/temp/10.jpg";

function Portfolio(props) {

  return (
    <div className={`${portfolioSection} ${section}`}>
      <Container >
        <Row>
          <Col xs="4">
            <div className={heading}>
              <h3><b>Portfolio</b></h3>
              <h6 className={myWorkColor}><b>My work</b></h6>

            </div>
          </Col>
          <Col xs="8">
            <div className={portfolioFilter}>
              <a href="#" data-filter="*" className={`${current} ${portfolioLinks}`}>
                <b>All</b>
              </a>
              <a href="#" className={portfolioLinks} data-filter=".react">
                <b>React</b>
              </a>
              <a href="#" className={portfolioLinks} data-filter=".full-stack">
                <b>Full Stack</b>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid = {true}>
        <div className={projectContainer}>contaier
        <img className={thumbnail} src={two} alt="us"/>
        
        </div>

      </Container>


    </div>

  )
};
export default Portfolio;