import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
                posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={cl.posts}>
                <Post message='11111111111'/>
                <Post message='44654654654'/>
            </div>
        </div>
    );
}

export default MyPosts;