import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {
    maxLenghtCreator,
    maxLengthCreator,
    minLenghtCreator,
    minLengthCreator,
    required
} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

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

const maxLength = maxLengthCreator(10);
const minLength = minLengthCreator(2);

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={'newPostBody'} placeholder='New post'
               validate={[required,maxLength,minLength]}/>
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