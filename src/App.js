import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import NavbarComponent from "./components/Navbar";
import Header from "./components/Header";
// import Portfolio from "./components/Portfolio";
// import Footer from "./components/Footer";
// import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="app-component">
            <CssBaseline />
            {/* Rest of application goes underneath the CssBaseline */}
            <Container>
              <NavbarComponent/>
              <Header />
            </Container>
    </div>
  );
}

export default App;
