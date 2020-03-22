import React from 'react';
import cl from './Profile.module.css';
import MyPosts from './MyPosts/MyPostsComponent.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from './Profile.jsx'
import * as axios from "axios";
import {connect} from "react-redux";
import {follow, setCurrentPage, setUserCount, setUsers, unfollow} from "../../Redux/users-reducer";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount =  () => {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    };

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
};



let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default  connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);