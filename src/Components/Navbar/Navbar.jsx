import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { FaCentos } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <FaCentos className="icon" />
            <h1>Inova</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Inicio
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Top Produtos
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contato
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Suporte
              </a>
            </li>

            <button className="btn">
              <a href="#">Compre Agora</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;