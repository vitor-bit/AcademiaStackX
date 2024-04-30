import React from "react";
import "./index.css"

function Image(props) {
    return <img className="image" src={props.src} alt={props.alt}/>
}

export default Image