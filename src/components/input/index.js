import React from "react";
import "./index.css"

function Input(props) {
    return <input className="input" type={props.type} name={props.name} placeholder={props.placeholder} />

}

export default Input