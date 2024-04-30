import React from "react"
import Title from "../title"
import Button from "../button"
import "./index.css"



function PriceAndButton(props) {
    return (
        <div className="container-priceAndButton">
            <span className="price">{props.price}</span>
            <Button text="Comprar" onClick={props.function}/>
        </div>
    )
}

export default PriceAndButton