import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from "../../../Redux/state";

const MyPosts = (props) => {


    let postElements = props.posts
        .map(el => <Post message={el.message} likeCount={el.likeCount}/>)

    let newPostElement = React.createRef()

    let AddPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // eslint-disable-next-line no-undef
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={cl.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
            <div className={cl.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;