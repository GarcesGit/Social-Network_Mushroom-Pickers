import React from "react";
import cl from "./../Dialogs.module.css";

const Message = (props) => {
    return <div className={cl.message}>{props.messageText}</div>;
};

export default Message;
