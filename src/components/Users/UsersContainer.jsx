import React from 'react';
import {connect} from "react-redux";
import {setCurrentPage, getUsers, unfollow, follow} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersAPIComponent extends React.Component {
    componentDidMount = async () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };
    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize);
    };

    render() {
        if(this.props.isAuth === false) return <Redirect to={'/login'}/>;
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
};


// compose(
//     connect(mapStateToProps,
//         {follow, unfollow, setCurrentPage, getUsers}
//     ),
//     withAuthRedirect
// )(UsersAPIComponent);

// export default connect(mapStateToProps,
//     {follow, unfollow, setCurrentPage, getUsers}
// )(UsersAPIComponent);;

export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, getUsers}
    ),
    withAuthRedirect
)(UsersAPIComponent);