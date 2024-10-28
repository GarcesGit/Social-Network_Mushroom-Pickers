import React from "react";
import cl from "./Footer.module.css";
import github_img from "../../pictures/github_wt.png";
import telegram_img from "../../pictures/telegram_wt.png";
import mail_img from "../../pictures/mail_wt.png";

const Footer = () => {
    return (
        <div className={cl.footer}>
            <a href="https://github.com/GarcesGit" target="_blank">
                <img src={github_img} alt="" className={cl.social_img} />
            </a>
            <a href="https://t.me/NatashKosh" target="_blank">
                <img src={telegram_img} alt="" className={cl.social_img} />
            </a>
            <a href="mailto:nataly.garces.company@gmail.com" target="_blank">
                <img src={mail_img} alt="" className={cl.social_img} />
            </a>
            <p>Nataly Garces Studio &copy; 2023</p>
        </div>
    );
};

export default Footer;
