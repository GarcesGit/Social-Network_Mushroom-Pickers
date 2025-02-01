import React from "react";
import cl from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/input/button/Button";
import { useRef } from "react";

const Dialogs = (props) => {
    const dialogElements = props.dialogsState.dialogs.map((d) => (
        <DialogItem id={d.id} name={d.name} />
    ));

    const messageElements = props.dialogsState.messages.map((m) => (
        <Message id={m.id} messageText={m.message} />
    ));

    const newMessage = useRef();

    const onUpdateNewMessageBody = () => {
        const body = newMessage.current.value;
    };

    const onSendMessageClick = () => {
        newMessage.current.value = "";
    };

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>{dialogElements}</div>
            <div className={cl.messages + " " + cl.background}>{messageElements} </div>
            {/* пустой div перед Input чтобы Input отображался под сообщениями */}
            <div></div>
            <div className="input-group mb-3">
                <Input ref={newMessage} change={onUpdateNewMessageBody} />
                <Button buttonText="Click" click={onSendMessageClick} />
            </div>
        </div>
    );
};

export default Dialogs;
