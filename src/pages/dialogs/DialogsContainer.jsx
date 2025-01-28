import React from "react";
import cl from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/input/button/Button";
import { useRef } from "react";
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const onUpdateNewMessageBody = () => {
        const body = newMessage.current.value;
        const action = updateNewMessageBodyActionCreator(body);
        props.dispatch(action);
    };

    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
        newMessage.current.value = "";
    };

    return <Dialogs dialogsState={props.dialogsState} />;
};

export default DialogsContainer;
