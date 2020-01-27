/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { portfolioSection, section, heading, myWorkColor, flipBox, flipBoxInner, flipBoxFront, flipBoxBack, flipBoxTwo, flipBoxTwoInner, flipBoxTwoFront, flipBoxTwoBack, flipBoxThree, flipBoxThreeInner, flipBoxThreeFront, flipBoxThreeBack , flipBoxFour, flipBoxFourInner, flipBoxFourFront, flipBoxFourBack , flipBoxFive, flipBoxFiveInner, flipBoxFiveFront, flipBoxFiveBack,  links, smallCards, projects, cardThree, cardFour, cardOne, cardTwo, cardFive } from "./css/portfolio.module.scss";
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
        </Row>
      </Container>
      <Container fluid={true}>
        <Row>



          <section className={`${projects} ${cardTwo}`}>
            <div className={flipBoxTwo}>
              <div className={flipBoxTwoInner}>
                <div className={flipBoxTwoFront}>
                  {/* <img src={props.image} alt={props.name} style={{ width: "300px", height: "200px" }} /> */}
                </div>
                <div className={flipBoxTwoBack}>
                  <h2>{props.name}</h2>
                  <a href="https://project-three-real-estate.herokuapp.com/">Link to Real Estate App</a>
                  <br />
                  <a href="https://github.com/suarez9093/real-estate">Link to Github</a>
                  <p>If you've ever been in the market to buy a house, or simply want to view one, you'd typically have to set up a showing with a realtor to view a home for sale. Our app lets you directly request an appointment to view a home without the need to go through a realtor. You simply open our app, request a showing if the home is listed in the directory of our houses that use smart lock technology and request a code that unlocks a home. Within minutes you can request a showing and be inside viewing a home. This project is a full stack application using MongoDB, Express, React and Node.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={`${projects} ${cardFive}`}>
            <div className={flipBoxFive}>
              <div className={flipBoxFiveInner}>
                <div className={flipBoxFiveFront}>
                </div>
                <div className={flipBoxFiveBack}>
                  <h2>{props.name}</h2>
                  <div className={links}>
                  <a  href="https://suarez9093.github.io/hangman/">Link to DragonBall Z Hangman</a>
                  <br />
                  <a href="https://github.com/suarez9093/hangman">Link to Github</a>
                  </div>
                  <p>A hangman game built using the characters from the popular anime show DragonBall Z. You have 9 attempts to guess the word or character. This project was built with HTML, CSS, Bootstrap and JavaScript. </p>
                </div>
              </div>
            </div>
          </section>

          <section className={`${projects} ${cardOne}`}>
            <div className={flipBox}>
              <div className={flipBoxInner}>
                <div className={flipBoxFront}>
            
                </div>
                <div className={flipBoxBack}>
                  <h2>{props.name}</h2>
                  <a href="https://enigmatic-scrubland-10809.herokuapp.com/">Link to YouTube Clone</a>
                  <br />
                  <a href="https://github.com/suarez9093/react-youtube">Link to Github</a>
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
                  <a href="https://github.com/suarez9093/reactSpeedTyingGame">Link to Github</a>
                  
                  <p>A typing game that allows you to test how many words you can type before the time runs out. This is a front end application built with React.</p>
                </div>
              </div>
            </div>
          </section>
          <section className={`${projects} ${smallCards} ${cardFour}`}>
            <div className={`${flipBoxFour} `}>
              <div className={flipBoxFourInner}>
                <div className={flipBoxFourFront}>
                </div>
                <div className={flipBoxFourBack}>
                  <a href="https://whispering-river-96203.herokuapp.com/">Link to Toy Story Game</a>
                  <br />
                  <a href="https://github.com/suarez9093/clickygame">Link to Github</a>
                  <p>
                    A memory game built using the toy characters from the movie Toy Story. Once you click on a character the cards move order. This application is a front end application built using React.</p>
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