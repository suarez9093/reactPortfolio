import React from "react";
import { flipBox, flipBoxInner, flipBoxFront, flipBoxBack } from "./css/projectcard.module.scss";
// import dbz from "../Portfolio/img/dbz.png"

function ProjectCard(props) {
    console.log(props.image)
    return (
        <section>
            <div className={flipBox}>
                <div className={flipBoxInner}>
                    <div className={flipBoxFront}>
                        <img src={props.image} alt={props.name} style={{ width: "300px", height: "200px" }} />
                    </div>
                    <div className={flipBoxBack}>
                        <h2>{props.name}</h2>
                        <a href={props.link}>Link to App</a>
                        <br />
                        <a href={props.github}>Link to Github</a>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProjectCard;