import {userAPI as usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_COUNT = 'SET_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            };
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page};
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_USER_COUNT:
            return {...state, totalUsersCount: action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [ ...state.followingInProgress, action.userId]
                    : [ state.followingInProgress.filter(id => id != action.userId)]}
        default:
            return state;
    }
};

export let followSuccess = (userId) => ({type: FOLLOW, userId: userId});
export let unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId});
export let setUsers = (users) => ({type: SET_USERS, users: users});
export let setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page: page});
export let setUserCount = (count) => ({type: SET_USER_COUNT, count: count});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export let toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId});


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setUserCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        });
    };
};
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        })
    };
};
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        })
    };
};

export default usersReducer;