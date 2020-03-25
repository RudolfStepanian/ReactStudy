import React from 'react';
import cl from './Profile.module.css';
import MyPosts from './MyPosts/MyPostsComponent.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from './Profile.jsx'
import * as axios from "axios";
import {connect} from "react-redux";
import {follow, setCurrentPage, setUserCount, setUsers, unfollow} from "../../Redux/users-reducer";
import {getUserProfile, setUserProfile} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount =  () => {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
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
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default  connect(mapStateToProps, {setUserProfile, getUserProfile})(WithUrlDataContainerComponent);
export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);