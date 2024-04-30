import React from "react";
import Input from "../input";
import Button from "../button"
import "./index.css"

function FormShop({stateOpen, props}) {
    const handleSubmit = () => {
        alert("Compra efetuada com sucesso!")
    }
    if (stateOpen === null) {
        return
    }
    return (
        <div className="container-form">
            <form className="form" onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Nome" />
                <Input type="email" name="email" placeholder="Email" />
                <Button text="Confirmar compra" className="button"/>
                <Button text="Sair" onClick={props}/>
            </form>
        </div>
    )
}  

export default FormShop