import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
// import Dialogs from "./DialogsComponent";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        if(this.props.isAuth == false) return <Redirect to={'/login'}/>;
        return (
            <div className={cl.dialogs}>
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
        )
    }
};

// compose(
//     connect(mapStateToProps,mapDispatchToProps),
//     withAuthRedirect
// )(Dialogs);


let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        onNewMessageChange : (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        onSendMessageClick : () => {
            dispatch(addMessageActionCreate())
        }
    }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);;