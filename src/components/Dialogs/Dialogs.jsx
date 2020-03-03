import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = state.messages.map( el => <Message message={el.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.onSendMessageClick();
    };

    let onNewMessageChange = (e) =>{
        props.onNewMessageChange(e)
    };

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                {dialogElements}
            </div>
            <div className={cl.messages}>
                <div>{messageElement}</div>
                <div>
                    <textarea
                    ref={newMessageBody}
                    value={state.newMessageText}
                    onChange={onNewMessageChange}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;