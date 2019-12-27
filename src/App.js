import React from 'react';
import { Container, Row, Col } from "reactstrap";
import NavbarComponent from "./components/Navbar";
import Header from "./components/Header";
import "./style.css";

function App() {
  return (
    <div>
      <Container>
          
              <Header/>
          
        <Row>
          <NavbarComponent/>
        </Row>

      </Container>
    </div>
  );
}

export default App;
