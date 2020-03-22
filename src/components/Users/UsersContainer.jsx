import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUserCount,
    setUsers,
    unfollow,
    toggleIsFetching} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import loader from './../../asets/images/91.svg';
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {
    componentDidMount = async () => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUserCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    };

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader />: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
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
        isFetching: state.usersPage.isFetching
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setPage: (page) => {
            dispatch(setCurrentPage(page))
        },
        setUserCount: (count) => {
            dispatch(setUserCount(count))
        },
        toggleIsFetching: (isFetching) =>{
            dispatch(toggleIsFetching(isFetching))
        }
    }
};

const UsersContainer = connect(mapStateToProps,
    {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUserCount,
    toggleIsFetching
}
)(UsersAPIComponent);

export default UsersContainer;