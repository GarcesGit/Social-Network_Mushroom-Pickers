import React from "react";
import cl from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
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

const Message = (props) => {
    return <div className={cl.message}>{props.messageText}</div>;
};

const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <DialogItem name="Name1" id="1" />
                <DialogItem name="Name2" id="2" />
                <DialogItem name="Name3" id="3" />
            </div>
            <div className={cl.messages + " " + cl.background}>
                <Message messageText="Hi" />
                <Message messageText="How are u" />
                <Message messageText="Yo" />
            </div>
        </div>
    );
};

export default Dialogs;
