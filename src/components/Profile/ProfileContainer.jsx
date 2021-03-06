import React from 'react';
import Profile from './Profile.jsx'
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    };

    render() {
        debugger
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        userId: state.auth.userId,
        status: state.profilePage.status
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);