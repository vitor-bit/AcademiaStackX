import React from "react"
import "./index.css"
import Image from "../image"
import Title from "../title"
import FormShop from "../formShop"
import PriceAndButton from "../priceAndButton"
import danca from "../../img/danca.jpg"
import luta from "../../img/luta.jpg"
import musculacao from "../../img/musculacao.jpeg"
import natacao from "../../img/natacao.jpg"
import { useState } from "react"

const listPlans = [
    {
        title: "Dança",
        src: danca,
        alt: "danca",
        price: "R$90.99",
    },
    {
        title: "Luta",
        src: luta,
        alt: "luta",
        price: "R$60.99",
    },
    {
        title: "Musculação",
        src: musculacao,
        alt: "musculacaoa",
        price: "R$140.99",
    },
    {
        title: "Natação",
        src: natacao,
        alt: "natacao",
        price: "R$120.99",
    }
]



function Plans() {
    const [indexPlans, setIndexPlans] = useState(null)
    const handleOnclick = (index) => {
        setIndexPlans(index)
    }
    const handleClose = (index) => {
        setIndexPlans(null)
    }
    return (
        <div>
            <div>
                <FormShop stateOpen={indexPlans} props={handleClose}/>
            </div>
            <div className="container-global">
                {listPlans.map((index) => {
                    return (
                        <div className="container-plans">
                            <Title title={index.title} />
                            <Image src={index.src} alt={index.alt} />
                            <PriceAndButton price={index.price} function={() => handleOnclick(index)} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Plans