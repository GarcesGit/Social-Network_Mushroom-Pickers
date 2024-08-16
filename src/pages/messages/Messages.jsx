import React from "react";
import cl from "./Messages.module.css";

const Messages = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.dialog + " " + cl.background + " " + cl.active}>
                    Name1
                </div>
                <div className={cl.dialog + " " + cl.background}>Name2</div>
                <div className={cl.dialog + " " + cl.background}>Name3</div>
                <div className={cl.dialog + " " + cl.background}>Name4</div>
                <div className={cl.dialog + " " + cl.background}>Name5</div>
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
