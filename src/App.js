import React, { useState, PropTypes } from 'react';
import NavbarComponent from "./components/Navbar";
import {container} from "./css/app.module.scss";
import "./css/app.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import projects from "./projects.json";
import Portfolio from "./components/Portfolio";
import PortfolioCard from "./components/ProjectCard";
import { Container, Row, Col } from 'reactstrap';


function App() {
  
  return (
    
    <Container className={container} fluid={true}>

    
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <h1>Portfolio</h1>
      <h1>About</h1>
      <h1>Footer</h1>
      {/* <Row>
        <Col xs="1">
        <NavbarComponent />
        </Col>
        <Col>
        <Portfolio xs="11">
        {card.map(project =>
          
          <PortfolioCard
          id={project.id}
          name={project.name}
          description={project.description}
          link={project.link}
          github={project.github}
          image={project.image}
          />
          )}
          </Portfolio>
          </Col>
          </Row>
          <Row>
          <Col>
          <Footer />
          </Col>
        </Row> */}
    </Container>



);
}

export default App;

