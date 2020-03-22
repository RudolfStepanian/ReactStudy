import React from 'react';
import cl from './Profile.module.css';
import MyPosts from './MyPosts/MyPostsComponent.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
};

export default Profile;