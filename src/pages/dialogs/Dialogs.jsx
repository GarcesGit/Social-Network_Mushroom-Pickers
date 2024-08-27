import React from "react";
import cl from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {
    const dialogsData = [
        { id: 1, name: "Name1" },
        { id: 2, name: "Name2" },
        { id: 3, name: "Name3" },
        { id: 4, name: "Name4" },
    ];
    const messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are u" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo man" },
    ];

    const dialogElements = dialogsData.map((d) => <DialogItem id={d.id} name={d.name} />);

    const messageElements = messagesData.map((m) => (
        <Message id={m.id} messageText={m.message} />
    ));

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>{dialogElements}</div>
            <div className={cl.messages + " " + cl.background}>{messageElements} </div>
        </div>
    );
};

export default Dialogs;
