import React from 'react';
import NavbarComponent from "./components/Navbar";
import {container} from "./css/app.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div className={container}>
          <NavbarComponent />
          <Header />
          <Portfolio />
          <Footer />
    </div>
  );
}

export default App;
