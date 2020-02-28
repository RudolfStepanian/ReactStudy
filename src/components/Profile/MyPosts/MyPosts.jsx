import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts
        .map( el => <Post message={el.message} likeCount={el.likeCount}/>)

    return (
        <div className={cl.postsBlock}>
            <h3>
               My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={cl.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;