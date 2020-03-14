import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";

class Dialogs extends React.Component{
    dialogElements = this.props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    messageElement = this.props.dialogsPage.messages.map( el => <Message message={el.message} key={el.id}/>)
    newMessageBody = this.props.dialogsPage.newMessageBody;

    onSendMessageClick = () =>{
        this.props.onSendMessageClick();
        this.render();
    };

    onNewMessageChange = (e) =>{
        this.props.onNewMessageChange(e.target.value)
    };

    render() {
        return <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                {this.dialogElements}
            </div>
            <div className={cl.messages}>
                <div>{this.messageElement}</div>
                <div>
                    <textarea
                        ref={this.newMessageBody}
                        value={this.props.dialogsPage.newMessageText}
                        onChange={this.onNewMessageChange}/>
                </div>
                <div>
                    <button onClick={this.onSendMessageClick}>send message</button>
                </div>
            </div>
        </div>
    }
};

export default Dialogs;