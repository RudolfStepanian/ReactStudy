import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'hi how are you?', likeCount: 12},
        {id: 2, message: "it's my first post", likeCount: 6 },
        {id: 2, message: "it's my second post", likeCount: 3 },
        {id: 2, message: "it's my new post", likeCount: 15 }
    ];

    let postElements = postsData
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