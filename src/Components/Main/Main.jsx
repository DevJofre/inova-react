import React from "react";
import './main.css'

import img from '../../Assets/img1.png'
import { IoBagHandleSharp } from "react-icons/io5";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Data = [
    {
        id:1,
        imgSrc: img,
        product:"produto1",
        brand: "marca",
        grade: "nota",
        fees: "$26",
        description:"descrição do produto descrição do produto descrição do produto descrição do produto descrição do produto"
    }
]

const Main = () => {
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Cosmeticos disponiveis
                </h3>
            </div>

            <div className="secContent grid">

                {
                    Data.map(({id, imgSrc, product, brand , grade, fees, description })=>{
                        return(
                            <div key={id} className="singleDestinatarion">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={product} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle"> {product} </h4>
                                    <span className="continent flex" >
                                        <IoBagHandleSharp className="icon" />
                                        <span className="name">
                                            {brand}
                                        </span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>

                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>

                                </div>
                            </div>
                        )
                    })


                }

            </div>


        </section>
    )
}

export default Main