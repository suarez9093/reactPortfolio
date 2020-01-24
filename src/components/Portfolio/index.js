import React from 'react';
// import { portfolio } from "./css/portfolio.module.scss";
// import dbz from "./img/dbz.png"
import { Container, Row, Col } from 'reactstrap';

function Portfolio(props) {
  //  console.log(props)
  return (
      <div>
        {props.children}
      </div>

  )
};
export default Portfolio;