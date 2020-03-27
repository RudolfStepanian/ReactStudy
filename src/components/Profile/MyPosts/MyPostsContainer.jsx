import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts.jsx";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        addPost : (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;