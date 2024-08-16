import React from "react";
import cl from "./Messages.module.css";
import { NavLink } from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.dialog + " " + cl.background}>
                    <NavLink
                        to="/messages/1"
                        className={({ isActive }) => (isActive ? cl.activeLink : null)}
                    >
                        Name1
                    </NavLink>
                </div>
                <div className={cl.dialog + " " + cl.background}>
                    <NavLink
                        to="/messages/2"
                        className={({ isActive }) => (isActive ? cl.activeLink : null)}
                    >
                        Name2
                    </NavLink>
                </div>
                <div className={cl.dialog + " " + cl.background}>
                    <NavLink
                        to="/messages/3"
                        className={({ isActive }) => (isActive ? cl.activeLink : null)}
                    >
                        Name3
                    </NavLink>
                </div>
            </div>
            <div className={cl.messages + " " + cl.background}>
                <div className={cl.message}>Hi</div>
                <div className={cl.message}>How are u</div>
                <div className={cl.message}>Yo</div>
            </div>
        </div>
    );
};

export default Messages;
