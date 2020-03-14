import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts.jsx";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/DialogsComponent";

// const MyPostsContainer = (props) => {
//     // let state =props.store.getState();
//     //
//     // let addPost = () => {
//     //     props.store.dispatch(addPostActionCreator());
//     // };
//     //
//     // let onPostChange = (text) => {
//     //     props.store.dispatch(updateNewPostTextActionCreator(text));
//     // };
//     //
//     // return <MyPosts addPost={addPost}
//     //                 onPostChange={onPostChange}
//     //                 posts={state.profilePage.posts}
//     //                 newPostText={state.profilePage.newPostText}/>;
//
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 let state = /*props.*/store.getState();
//
//                 let addPost = () => {
//                     /*props.*/store.dispatch(addPostActionCreator());
//                 };
//
//                 let onPostChange = (text) => {
//                     // let text = props.newPostText;
//                     /*props.*/store.dispatch(updateNewPostTextActionCreator(text));
//                 };
//                 debugger
//                 return <MyPosts addPost={addPost}
//                                 onPostChange={onPostChange}
//                                 posts={/*store*/state.profilePage.posts}
//                                 newPostText={/*store*/state.profilePage.newPostText}/>
//             }
//         }
//     </StoreContext.Consumer>
// };

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        addPost : () => {
            dispatch(addPostActionCreator());
        },
        onPostChange : (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;