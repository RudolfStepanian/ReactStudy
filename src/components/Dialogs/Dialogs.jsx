import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/state";

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let changeMessageText = () =>{
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    };

    let sendMessage = () =>{
        props.dispatch(addMessageActionCreate());
    };

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
                <div>{messageElement}</div>
                <div>
                    <textarea
                    ref={newMessage}
                    value={props.state.newMessageText}
                    onChange={changeMessageText}
                />
                </div>
                <div>
                    <button onClick={sendMessage}>send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;