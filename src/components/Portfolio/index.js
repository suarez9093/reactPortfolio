/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { portfolioSection, section, heading, myWorkColor, portfolioFilter, current, portfolioLinks, projectContainer, flipBox, flipBoxInner, flipBoxFront, flipBoxBack, flipBoxTwo, flipBoxTwoInner, flipBoxTwoFront, flipBoxTwoBack, flipBoxThree, flipBoxThreeInner, flipBoxThreeFront, flipBoxThreeBack , flipBoxFour, flipBoxFourInner, flipBoxFourFront, flipBoxFourBack , flipBoxFive, flipBoxFiveInner, flipBoxFiveFront, flipBoxFiveBack } from "./css/portfolio.module.scss";
import { Container, Row, Col } from "reactstrap";
import realEstate from "./img/realEstate.jpg"

function Portfolio(props) {
  const [fullScreen, setFullScreen] = useState(false)
  const toggleFullScreen = () => setFullScreen(prevState => !prevState)

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
          {/* <Col xs="8">
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
          </Col> */}
        </Row>
      </Container>
      <Container fluid={true}>
        <Row>

          <section>
            <div className={flipBoxTwo}>
              <div className={flipBoxTwoInner}>
                <div className={flipBoxTwoFront}>
                  {/* <img src={props.image} alt={props.name} style={{ width: "300px", height: "200px" }} /> */}
                </div>
                <div className={flipBoxTwoBack}>
                  <h2>{props.name}</h2>
                  <a href="https://project-three-real-estate.herokuapp.com/">Link To Real Estate App</a>
                  <br />
                  <a href="https://github.com/suarez9093/real-estate">Link to Github</a>
                  <p>description</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={flipBoxFive}>
              <div className={flipBoxFiveInner}>
                <div className={flipBoxFiveFront}>
                  {/* <img src={props.image} alt={props.name} style={{ width: "300px", height: "200px" }} /> */}
                </div>
                <div className={flipBoxFiveBack}>
                  <h2>{props.name}</h2>
                  <a href={props.link}>Link to DragonBall Z Hangman</a>
                  <br />
                  <a href={props.github}>Link to Github</a>
                  <p>{props.description}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={flipBox}>
              <div className={flipBoxInner}>
                <div className={flipBoxFront}>
                  {/* <img src={props.image} alt={props.name} style={{ width: "300px", height: "200px" }} /> */}
                </div>
                <div className={flipBoxBack}>
                  <h2>{props.name}</h2>
                  <a href={props.link}>Link to YouTube Clone</a>
                  <br />
                  <a href={props.github}>Link to Github</a>
                  <p>{props.description}</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={flipBoxThree}>
              <div className={flipBoxThreeInner}>
                <div className={flipBoxThreeFront}>
                  {/* <img src={props.image} alt={props.name} style={{ width: "300px", height: "200px" }} /> */}
                </div>
                <div className={flipBoxThreeBack}>
                  <h2>{props.name}</h2>
                  <a href={props.link}>Link to Speed Typing Game</a>
                  <br />
                  <a href={props.github}>Link to Github</a>
                  <p>{props.description}</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={flipBoxFour}>
              <div className={flipBoxFourInner}>
                <div className={flipBoxFourFront}>
                  {/* <img src={props.image} alt={props.name} style={{ width: "300px", height: "200px" }} /> */}
                </div>
                <div className={flipBoxFourBack}>
                  <h2>{props.name}</h2>
                  <a href={props.link}>Link to Toy Story Game</a>
                  <br />
                  <a href={props.github}>Link to Github</a>
                  <p>{props.description}</p>
                </div>
              </div>
            </div>
          </section>



        </Row>

      </Container>



    </div>

  )
};
export default Portfolio;