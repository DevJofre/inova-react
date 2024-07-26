import React from "react";
import './home.css'
import video from '../../Assets/video2.mp4'
import { FaSearch } from "react-icons/fa";
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";


const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4" ></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">
                        Nossos Produtos
                    </span>
                    <h1 className="homeTitle">
                        Escolha seus Produtos
                    </h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="product">
                            Procure seu Produtos:
                        </label>

                        <div className="input flex">
                            <input type="text" placeholder="Digite o nome aqui..." />
                            <FaSearch className="icon"  />
                        </div>

                    </div>
                </div>

                <div className="homeFooterIcons flex">

                    <div className="rightIcons">
                        <SlSocialFacebook className="icon" />
                        <SlSocialInstagram className="icon" />
                        <SlSocialLinkedin className="icon" />
                    </div>

                    <div className="leftIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Home