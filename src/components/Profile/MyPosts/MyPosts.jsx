import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

class MyPosts extends React.Component {
    constructor(props) {
        super(props);
    }

    newPostElement = React.createRef();

    postElements = this.props.posts
        .map(e => <Post message={e.message} likeCount={e.likeCount}/>);

    onPostChange() {
        let text = this.newPostElement.current.value;
        this.props.onPostChange(text);
    };
    onAddPost() {
        this.props.addPost();
        this.postElements = this.props.posts
            .map(e => <Post message={e.message} likeCount={e.likeCount}/>);
    };

    render() {
        return (
            <div className={cl.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea
                        ref={this.newPostElement}
                        onChange={this.onPostChange}
                        value={this.props.newPostText}
                    />
                    </div>
                    <div>
                        <button onClick={this.onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={cl.posts}>
                    {this.postElements}
                </div>
            </div>
        );
    }
}

export default MyPosts;