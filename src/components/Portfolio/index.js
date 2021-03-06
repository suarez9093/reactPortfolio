/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { heading, myWorkColor, flipBox, flipBoxInner, flipBoxFront, flipBoxBack, flipBoxTwo, flipBoxTwoInner, flipBoxTwoFront, flipBoxTwoBack, flipBoxThree, flipBoxThreeInner, flipBoxThreeFront, flipBoxThreeBack, flipBoxFour, flipBoxFourInner, flipBoxFourFront, flipBoxFourBack, flipBoxFive, flipBoxFiveInner, flipBoxFiveFront, flipBoxFiveBack, links, smallCards, projects, cardThree, cardFour, cardOne, cardTwo, cardFive } from "./css/portfolio.module.scss";
import { Row, Col } from "reactstrap";

function Portfolio(props) {
  return (
    // <div className={`${portfolioSection} ${section}`}>
    <div className="container-fluid" >
      <Row>
        <Col xs="4">
          <div className={heading}>
            <h3><b>Portfolio</b></h3>
            <h6 className={myWorkColor}><b>My work</b></h6>

          </div>
        </Col>
      </Row>
      <div className="row">
        <div className="col d-none d-sm-block">
          <section className={` ${cardTwo}`}>
            <div className={flipBoxTwo}>
              <div className={flipBoxTwoInner}>
                <div className={flipBoxTwoFront}>
                </div>
                <div className={flipBoxTwoBack}>
                  <h2>{props.name}</h2>
                  <a href="https://project-three-real-estate.herokuapp.com/">Link to Real Estate App</a>
                  <br />
                  <a href="https://github.com/suarez9093/real-estate">Link to Github</a>
                  <p >A real estate app built for the purpose of scheduling home viewings without the need of a real estate agent. This project is a full stack application using MongoDB, Express, React and Node.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col">
          <section className={`${projects} ${cardFive}`}>
            <div className={flipBoxFive}>
              <div className={flipBoxFiveInner}>
                <div className={flipBoxFiveFront}>
                </div>
                <div className={flipBoxFiveBack}>
                  <h2>{props.name}</h2>
                  <div className={links}>
                    <a href="https://suarez9093.github.io/hangman/">Link to DragonBall Z Hangman</a>
                    <br />
                    <br />
                    <a href="https://github.com/suarez9093/hangman">Link to Github</a>
                  </div>
                  <p>A hangman game built using the characters from the popular anime show DragonBall Z. You have 9 attempts to guess the word or character. This project was built with HTML, CSS, Bootstrap and JavaScript. </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col">
          <section className={`${projects} ${cardOne}`}>
            <div className={flipBox}>
              <div className={flipBoxInner}>
                <div className={flipBoxFront}>
                </div>
                <div className={flipBoxBack}>
                  <h2>{props.name}</h2>
                  <a href="https://enigmatic-scrubland-10809.herokuapp.com/">Link to YouTube Clone</a>
                  <br />
                  <br />
                  <a href="https://github.com/suarez9093/react-youtube">Link to Github</a>
                  <br />
                  <br />
                  <p>A site that is a simple YouTube clone. Users can search any video using the search bar. This site is a front end application built with React.</p>
                </div>
              </div>
            </div>
          </section>
          <section className={`${projects} ${smallCards} ${cardThree}`}>
            <div className={`${flipBoxThree} ${smallCards}`}>
              <div className={flipBoxThreeInner}>
                <div className={flipBoxThreeFront}>
                </div>
                <div className={flipBoxThreeBack}>
                  <a href="https://suarez9093.github.io/reactSpeedTyingGame/">Link to Speed Typing Game</a>
                  <br />
                  <br />
                  <a href="https://github.com/suarez9093/reactSpeedTyingGame">Link to Github</a>
                  <br />
                  <br />

                  <p>A typing game that allows you to test how many words you can type before the time runs out. This is a front end application built with React.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
};
export default Portfolio;