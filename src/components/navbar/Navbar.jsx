import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                <NavLink
                    to="/profile"
                    className={({ isActive }) => (isActive ? cl.activeLink : null)}
                >
                    Profile
                </NavLink>
            </div>
            <div className={cl.item}>
                <NavLink
                    to="/dialogs"
                    className={({ isActive }) => (isActive ? cl.activeLink : null)}
                >
                    Messages
                </NavLink>
            </div>
            <div className={cl.item}>
                <NavLink
                    to="/news"
                    className={({ isActive }) => (isActive ? cl.activeLink : null)}
                >
                    News
                </NavLink>
            </div>
            <div className={cl.item}>
                <NavLink
                    to="/music"
                    className={({ isActive }) => (isActive ? cl.activeLink : null)}
                >
                    Music
                </NavLink>
            </div>
            {/* <div className={cl.item}>
                <NavLink
                    to="/settings"
                    className={({ isActive }) => (isActive ? cl.activeLink : null)}
                >
                    Settings
                </NavLink>
            </div> */}
        </nav>
    );
};

export default Navbar;
