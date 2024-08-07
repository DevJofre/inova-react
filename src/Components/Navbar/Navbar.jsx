import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // Function to toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  // Function to remover navBar
  const removeNav = () => {
    setActive("navBar");
  };
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="http://localhost:3000/" className="logo flex">
            <h1> Inova </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="http://localhost:3000/" className="navLink">
                Inicio
              </a>
            </li>

            <li className="navItem">
              <a href="http://localhost:3000/" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="http://localhost:3000/" className="navLink">
                Sobre
              </a>
            </li>

            <li className="navItem">
              <a href="http://localhost:3000/" className="navLink">
                Contatos
              </a>
            </li>

            <li className="navItem">
              <a href="http://localhost:3000/" className="navLink">
                Suporte
              </a>
            </li>

            <li className="navItem">
              <a href="http://localhost:3000/" className="navLink">
                Cadastra
              </a>
            </li>

            <button className="btn">
              <a href="http://localhost:3000/">Entra</a>
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