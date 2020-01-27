import React from "react";
import "./css/app.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import { Container, Row, Col } from "reactstrap"

function App() {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
        <Header />
        </Col>

      </Row>
      <Row>
        <Col>
        <Portfolio />
        </Col>
      </Row>
      <Row>
        <Col>
        <About />
        </Col>

      </Row>
      <Row>
        <Col>
        <Footer />
        </Col>

      </Row>

    </Container>

  );
}
export default App;

