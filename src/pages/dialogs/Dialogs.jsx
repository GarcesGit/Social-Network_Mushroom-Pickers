import React from "react";
import cl from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {
    const dialogElements = props.dialogsState.dialogs.map((d) => (
        <DialogItem id={d.id} name={d.name} />
    ));

    const messageElements = props.dialogsState.messages.map((m) => (
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
