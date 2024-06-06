import React from "react";
import logo from "../../pictures/logo.png";
import cl from "./Header.module.css";

const Header = () => {
    return (
        <header className={cl.header}>
            <img src={logo} className={cl.logo} />
            <div className={cl.title}>Mushroom Pickers</div>
        </header>
    );
};

export default Header;
