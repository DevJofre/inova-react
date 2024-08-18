import React, { useEffect } from "react";
import "./footer.css";

import { FiSend } from "react-icons/fi";
import { FaCentos } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

import video2 from "../../Assets/video3.mp4";

const Footer = () => {
  //scroll animation

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small> MANTENHA CONTATO </small>
            <h2> Entre encontato</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Insira o Email"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              ENVIAR <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className="logo flex">
                <FaCentos className="icon" />
                Inova
              </a>
            </div>

            <div className="footerParagraph">
            A Inova é uma empresa dedicada à comercialização de cosméticos de alta qualidade, voltada para a inovação e a satisfação de seus clientes.
            </div>

            <div className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaSquareFacebook className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">    
            <div className="linkGroup">
              <span className="groupTitle">Departamentos</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Maquiagem
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Cabelos
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Barbearia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Blog
              </li>
            </div>


            <div className="linkGroup">
              <span className="groupTitle">Suporte</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Entregas
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Promoções
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Cupom
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Pagamentos
              </li>
            </div>

          </div>

          <div className="footerDiv">
            <small> Copyright © 2024 </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;