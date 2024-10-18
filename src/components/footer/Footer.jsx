import React from "react";
import cl from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={cl.footer}>
            <a href="https://github.com/GarcesGit">
                <img src={github_img} alt="" className={cl.social_img} />
            </a>
            <a href="https://t.me/NatashKosh">
                <img src={telegram_img} alt="" className={cl.social_img} />
            </a>
            <p>Nataly Garces Studio &copy; 2023</p>
        </div>
    );
};

export default Footer;
