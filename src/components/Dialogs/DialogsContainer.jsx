import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreate} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElement = props.dialogsPage.messages.map(el => <Message message={el.message} key={el.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;

    let addNewMessage = (values) => {
        props.onSendMessageClick(values.newMessageBody)
    };

    if (props.isAuth == false) return <Redirect to={'/login'}/>;
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItem}>
                {dialogElements}
            </div>
            <div className={cl.messages}>
                <div>{messageElement}</div>
                <DialogReduxForm onSubmit={addNewMessage}/>
                {/*<div>*/}
                {/*    <textarea*/}
                {/*        ref={newMessageBody}*/}
                {/*        value={props.dialogsPage.newMessageText}*/}
                {/*        onChange={onNewMessageChange}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button onClick={onSendMessageClick}>send message</button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
};


const DialogForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={'textarea'} name={'newMessageBody'} placeholder='Enter your message'/>
        <div>
            <button>send message</button>
        </div>
    </form>
};

const DialogReduxForm = reduxForm({form: 'dialogAddMessageForm'})(DialogForm);

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(addMessageActionCreate(newMessageBody))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
;