import React from "react";
import "./Header.scss";

const Header = () => {
    return (
        <header id="header">
            <nav className="menu">
                <h1 className="logo">2024 PORTFOLIO</h1>
                <ul className="contents">
                    <li>ABOUT ME</li>
                    <li>|</li>
                    <li>SKILL</li>
                    <li>|</li>
                    <li>EXPERIENCE</li>
                    <li>|</li>
                    <li>PROJECT</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
