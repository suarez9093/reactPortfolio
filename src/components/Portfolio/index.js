import React from 'react';
import { flipBox, flipBoxInner, flipBoxFront, flipBoxBack } from "./css/portfolio.module.scss";
import dbz from "./img/dbz.png"

export default function Portfolio() {
  return (
    <section>
      <div className={flipBox}>
        <div className={flipBoxInner}>
          <div className={flipBoxFront}>
            <img src={dbz} alt="dbz" style={{width:"300px", height:"200px"}} />
    </div>
            <div className={flipBoxBack}>
              <h2>DragonBall Hangman</h2>
              <a href="http://www.google.com">Link to Game</a>
              <br />
              <a href="http://www.google.com">Link to Game</a>
            </div>
          </div>
        </div>
    </section>
      )
    };
