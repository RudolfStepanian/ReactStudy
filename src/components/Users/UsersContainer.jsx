import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleIsFollowingProgress, getUsers
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import loader from './../../asets/images/91.svg';
import Preloader from "../common/Preloader/Preloader";
import {userAPI as usersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {
    componentDidMount = async () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setUserCount(data.totalCount);
        //     this.props.toggleIsFetching(false);
        // });
    };

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(p);
        // usersAPI.getUsers(p, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // });
    };

    render() {
        return <>
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
        </>
    };
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers
    }
)(UsersAPIComponent);

export default UsersContainer;