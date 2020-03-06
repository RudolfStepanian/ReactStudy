import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElement = props.dialogsPage.messages.map( el => <Message message={el.message} key={el.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () =>{
        props.onSendMessageClick();
    };

    let onNewMessageChange = (e) =>{
        props.onNewMessageChange(e.target.value)
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
                    value={props.dialogsPage.newMessageText}
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