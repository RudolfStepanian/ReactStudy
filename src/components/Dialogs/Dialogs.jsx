import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogElement =
        props.state.dialogs.map((el) =>{
            return <DialogItem name={el.name} id={el.id}/>
        });

    let messageElement = props.state.messages
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