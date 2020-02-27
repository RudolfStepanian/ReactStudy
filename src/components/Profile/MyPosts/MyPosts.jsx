import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message='11111111111' likeCount='6'/>
                <Post message='44654654654' likeCount='0'/>
            </div>
        </div>
    );
};

export default MyPosts;