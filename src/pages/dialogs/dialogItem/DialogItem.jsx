import React from "react";
import cl from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={cl.dialog + " " + cl.background}>
            <NavLink
                to={path}
                className={({ isActive }) => (isActive ? cl.activeLink : null)}
            >
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;
