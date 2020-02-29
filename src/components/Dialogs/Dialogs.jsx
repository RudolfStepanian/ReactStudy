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

    let newMessage = React.createRef();
    let sendMessage = () =>{
        let message = newMessage.current.value;
    };

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                {dialogElement}
            </div>
            <div className={cl.messages}>
                {messageElement}
                <textarea ref={ newMessage }></textarea>
                <button onClick={ sendMessage }>send message</button>
            </div>
        </div>
    )
};

export default Dialogs;