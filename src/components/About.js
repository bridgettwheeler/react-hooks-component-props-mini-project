import React from "react";
import App from "./App";

function About(props) {
    return (
        <aside>
            <img src={props.image} alt= "blog logo" default="https://via.placeholder.com/215"/>
            <p>{props.about}</p>
        </aside>
    )

    export default About;
}