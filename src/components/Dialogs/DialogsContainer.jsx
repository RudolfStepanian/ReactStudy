import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     // let onSendMessageClick = () =>{
//     //     props.store.dispatch(addMessageActionCreate());
//     // };
//     //
//     // let onNewMessageChange = (e) =>{
//     //     props.store.dispatch(updateNewMessageTextActionCreator(text))
//     // };
//     //
//     // return <Dialogs onSendMessageClick={onSendMessageClick}
//     //                 onNewMessageChange={onNewMessageChange}
//     //                 dialogsPage={props.store.getState().dialogsPage}/>;
//
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 let onSendMessageClick = () => {
//                     store.dispatch(addMessageActionCreate());
//                 };
//
//                 let onNewMessageChange = (text) => {
//                     // let text = e.target.value;
//                     store.dispatch(updateNewMessageTextActionCreator(text))
//                 };
//                 return <Dialogs onSendMessageClick={onSendMessageClick}
//                                 onNewMessageChange={onNewMessageChange}
//                                 dialogsPage={props.store.getState().dialogsPage}/>
//             }
//         }
//     </StoreContext.Consumer>
// };

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        // onNewMessageChange : () => {
        //     dispatch(addMessageActionCreate());
        // },
        // onSendMessageClick : (text) => {
        //     dispatch(updateNewMessageTextActionCreator(text))
        // }
        onNewMessageChange : () => {
            dispatch(updateNewMessageTextActionCreator());
        },
        onSendMessageClick : (text) => {
            dispatch(addMessageActionCreate(text))
        }
    }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;