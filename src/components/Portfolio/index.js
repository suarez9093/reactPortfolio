/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { portfolioSection, section, heading, myWorkColor, portfolioFilter, current, portfolioLinks } from "./css/portfolio.module.scss";
import { Container, Row, Col } from "reactstrap";

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
    </div>

  )
};
export default Portfolio;