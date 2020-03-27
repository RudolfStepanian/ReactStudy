import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postElements = props.posts
        .map(e => <Post message={e.message} likeCount={e.likeCount}/>);

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    };
    let onAddPost = () => {
        props.addPost();
        postElements = props.posts
            .map(e => <Post message={e.message} likeCount={e.likeCount}/>);
    };

    let addPost = (values) =>{
        props.addPost(values.newPostBody)
    };

    return (<div className={cl.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={addPost}/>
            </div>
            <div className={cl.posts}>
                {postElements}
            </div>
        </div>
    );
};


const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field validate={[required]} component={'textarea'} name={'newPostBody'} placeholder='New post'/>
        {/*<Field >*/}
        {/*            <textarea*/}
        {/*                ref={props.newPostElement}*/}
        {/*                onChange={props.onPostChange}*/}
        {/*                value={props.newPostText}*/}
        {/*            />*/}
        {/*</Field>*/}
        <div>
            <button>Add post</button>
        </div>
    </form>
};

const PostReduxForm = reduxForm({form: 'post'})(PostForm);

export default MyPosts;