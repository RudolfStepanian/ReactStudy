import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    let state =props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return <MyPosts addPost={addPost}
                    onPostChange={onPostChange}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>;

    // return <StoreContext.Consumer>
    //     {
    //         (store) => {
    //             let state = /*props.*/store.getState();
    //
    //             let addPost = () => {
    //                 /*props.*/store.dispatch(addPostActionCreator());
    //             };
    //
    //             let onPostChange = (text) => {
    //                 // let text = props.newPostText;
    //                 /*props.*/store.dispatch(updateNewPostTextActionCreator(text));
    //             };
    //             debugger
    //             return <MyPosts addPost={addPost}
    //                             onPostChange={onPostChange}
    //                             posts={/*store*/state.profilePage.posts}
    //                             newPostText={/*store*/state.profilePage.newPostText}/>
    //         }
    //     }
    // </StoreContext.Consumer>
};

export default MyPostsContainer;