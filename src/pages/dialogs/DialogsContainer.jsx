import React from "react";
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    };

    const onUpdateNewMessageBody = (body) => {
        const action = updateNewMessageBodyActionCreator(body);
        props.dispatch(action);
    };

    return (
        <Dialogs
            dialogsState={props.dialogsState}
            onUpdateNewMessageBody={onUpdateNewMessageBody}
            onSendMessageClick={onSendMessageClick}
        />
    );
};

export default DialogsContainer;
