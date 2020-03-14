const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_COUNT = 'SET_USER_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
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
            return {...state, currentPage: action.count};
        default:
            return state;
    }
};

export let followAC = (userId) => ({type: FOLLOW, userId: userId});
export let unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export let setUsersAC = (users) => ({type: SET_USERS, users: users});
export let setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page: page});
export let setUserCount = (count) => ({type: SET_USER_COUNT, count: count});

export default usersReducer;