import React from 'react';
import cl from './Post.module.css';

const Post = (props) =>{
    return <div className={cl.item}>
        <img src='https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg' />
        {props.message}
        <div>
            <span>like</span> {props.likeCount}
        </div>
    </div>
};

export default Post;