const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_COUNT = 'SET_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
};

export let follow = (userId) => ({type: FOLLOW, userId: userId});
export let unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export let setUsers = (users) => ({type: SET_USERS, users: users});
export let setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page: page});
export let setUserCount = (count) => ({type: SET_USER_COUNT, count: count});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

export default usersReducer;