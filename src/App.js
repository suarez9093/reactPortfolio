import React from 'react';
import { Container, Row, Col } from "reactstrap";
import NavbarComponent from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div>
      <Container>
              <Header/>
        <Row>
          <NavbarComponent/>
        </Row>
        <Row>
          <Portfolio/>
        </Row>
        <Row>
          <Footer/>
        </Row>

      </Container>
    </div>
  );
}

export default App;
