import React from 'react';
import { container } from "./css/portfolio.module.scss";
// import dbz from "./img/dbz.png"

 function Portfolio(props) {
  //  console.log(props)
  return (
   <div className={container}>
     {props.children}
   </div>
      )
    };
export default Portfolio;