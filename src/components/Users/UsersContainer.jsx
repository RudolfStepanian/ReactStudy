import React from 'react';
import {connect} from "react-redux";
import {setCurrentPage, unfollow, follow, requestUsers} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount = async () => {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    };
    onPageChanged = (p) => {
        this.props.requestUsers(p, this.props.pageSize);
    };

    render() {
        // debugger
        // if(this.props.isAuth === false) return <Redirect to={'/login'}/>;
        return (<>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>)
    };
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        // isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, requestUsers}
    ),
    // withAuthRedirect
)(UsersAPIComponent);