import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    let onSendMessageClick = () =>{
        props.store.dispatch(addMessageActionCreate());
    };

    let onNewMessageChange = (e) =>{
        let text = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    };

    return <Dialogs onSendMessageClick={onSendMessageClick}
                    onNewMessageChange={onNewMessageChange}
                    store={props.store}/>;

    // return <StoreContext.Consumer>
    //     {
    //         (store) => {
    //             let onSendMessageClick = () => {
    //                 /*props.*/store.dispatch(addMessageActionCreate());
    //             };
    //
    //             let onNewMessageChange = (e) => {
    //                 let text = e.target.value;
    //                 /*props.*/store.dispatch(updateNewMessageTextActionCreator(text))
    //             };
    //             return <Dialogs onSendMessageClick={onSendMessageClick}
    //                             onNewMessageChange={onNewMessageChange}
    //                             store={/*props.*/store}/>
    //         }
    //     }
    // </StoreContext.Consumer>
};

export default DialogsContainer;