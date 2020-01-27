import React from "react";
import "./css/app.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
}
export default App;

