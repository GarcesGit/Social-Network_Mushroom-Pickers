import React from "react";
import cl from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={cl.dialog + " " + cl.background}>
            <NavLink
                to={"/dialogs/" + props.id}
                className={({ isActive }) => (isActive ? cl.activeLink : null)}
            >
                {props.name}
            </NavLink>
        </div>
    );
};

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <DialogItem name="Name1" id="1" />

                {/* <div className={cl.dialog + " " + cl.background}>
                    <NavLink
                        to="/dialogs/2"
                        className={({ isActive }) => (isActive ? cl.activeLink : null)}
                    >
                        Name2
                    </NavLink>
                </div>
                <div className={cl.dialog + " " + cl.background}>
                    <NavLink
                        to="/dialogs/3"
                        className={({ isActive }) => (isActive ? cl.activeLink : null)}
                    >
                        Name3
                    </NavLink>
                </div> */}
            </div>
            <div className={cl.messages + " " + cl.background}>
                <div className={cl.message}>Hi</div>
                <div className={cl.message}>How are u</div>
                <div className={cl.message}>Yo</div>
            </div>
        </div>
    );
};

export default Dialogs;
