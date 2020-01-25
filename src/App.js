import React, { useState, PropTypes } from 'react';
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
    <div>
          <Header />
          <Portfolio />
     
      </div>
      
   



);
}

export default App;

