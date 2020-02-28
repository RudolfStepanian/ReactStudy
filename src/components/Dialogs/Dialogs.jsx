import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Di'},
        {id: 2, name: 'An'},
        {id: 3, name: 'Sv'},
        {id: 4, name: 'Sa'},
        {id: 5, name: 'Vi'},
        {id: 6, name: 'Va'},
    ];

    let dialogElement =
        dialogsData.map((el) =>{
            return <DialogItem name={el.name} id={el.id}/>
        });

    let messagesData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
        {id: 6, message: 'yo'},
    ];

    let messageElement = messagesData
        .map( el => <Message message={el.message}/>)

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                {dialogElement}
            </div>
            <div className={cl.messages}>
                {messageElement}
            </div>
        </div>
    )
};

export default Dialogs;