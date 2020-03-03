import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let onSendMessageClick = () =>{
        props.store.dispatch(addMessageActionCreate());
    };

    let onNewMessageChange = (e) =>{
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    };

    return <Dialogs onSendMessageClick={onSendMessageClick}
                    onNewMessageChange={onNewMessageChange}
                    store={props.store}/>;
};

export default DialogsContainer;