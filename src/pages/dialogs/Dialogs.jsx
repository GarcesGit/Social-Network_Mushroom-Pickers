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
    let dialogsData = [
        { id: 1, name: "Name1" },
        { id: 2, name: "Name2" },
        { id: 3, name: "Name3" },
        { id: 4, name: "Name4" },
    ];
    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are u" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo man" },
    ];

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
            </div>
            <div className={cl.messages + " " + cl.background}>
                <Message messageText={messagesData[0].message} />
                <Message messageText={messagesData[1].message} />
                <Message messageText={messagesData[2].message} />
                <Message messageText={messagesData[3].message} />
            </div>
        </div>
    );
};

export default Dialogs;
