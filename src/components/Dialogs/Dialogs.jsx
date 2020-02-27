import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={cl.dialog}>
            <NavLink activeClassName={cl.active} to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return <div className={cl.message}>{props.message}</div>
};


const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                <DialogItem name='Name 1' id='1'/>
                <DialogItem name='Name 2' id='2'/>
                <DialogItem name='Name 3' id='3'/>
                <DialogItem name='Name 4' id='4'/>
                <DialogItem name='Name 5' id='5'/>
            </div>
            <div className={cl.messages}>
                <Message message='hi'/>
                <Message message='how are you'/>
                <Message message='yo'/>
            </div>
        </div>
    )
};

export default Dialogs;