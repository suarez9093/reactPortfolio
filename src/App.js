import React, { useState } from 'react';
import NavbarComponent from "./components/Navbar";
import {container} from "./css/app.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import projects from "./projects.json";
import Portfolio from "./components/Portfolio";
import PortfolioCard from "./components/ProjectCard";



function App() {
  const [ card , setCard ] = useState(projects);
 

  return (
    <div className={container}>
          {/* <NavbarComponent /> */}
          {/* <Header /> */}
          <Portfolio {[...card].map(project => {
            <PortfolioCard 
             id={project.id}
             name={project.name}
             description={project.description}
             link={project.link}
             github={project.github}
            />
          })} />
          {/* <Footer /> */}
         
    </div>
  );
}

export default App;

