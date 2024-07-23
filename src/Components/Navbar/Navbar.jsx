import React from "react";
import './navbar.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="https://example.com" className="logo flex">
                        <h1><MdOutlineTravelExplore />Inova</h1>
                    </a>
                </div>

                <div className="navBar">
                    <ul className="navLists flex">

                        <li className="navItem">
                            <a href="https://example.com" className="navLink"> Home </a>
                        </li>

                        <li className="navItem">
                            <a href="https://example.com" className="navLink"> Shop </a>
                        </li>

                        <li className="navItem">
                            <a href="https://example.com" className="navLink"> News </a>
                        </li>

                        <li className="navItem">
                            <a href="https://example.com" className="navLink"> Pages </a>
                        </li>

                        <li className="navItem">
                            <a href="https://example.com" className="navLink"> About </a>
                        </li>

                        <li className="navItem">
                            <a href="https://example.com" className="navLink"> Entra </a>
                        </li>

                        <li className="navItem">
                            <a href="https://example.com" className="navLink"> Cadastra </a>
                        </li>

                        <button className="btn">
                            <a href="https://example.com"> BOOK NOW </a>
                        </button>
                    </ul>

                    <div className="closeNavBar">
                        <AiFillCloseCircle />
                    </div>

                    <div className="toggleNavbar">
                        <TbGridDots />
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Navbar