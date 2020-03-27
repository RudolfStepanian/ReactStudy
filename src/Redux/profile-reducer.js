import {ProfileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'hi how are you?', likeCount: 12},
        {id: 2, message: "it's my first post", likeCount: 6},
        {id: 2, message: "it's my second post", likeCount: 3},
        {id: 2, message: "it's my new post", likeCount: 15}
    ],
    profile: null,
    isFetching: false,
    status: ''
};



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostBody, likeCount: 0}],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
};

export let addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export let setStatus = (status) => ({type: SET_STATUS, status: status});

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
};

export const getStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        })

};

export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0)
                dispatch(setStatus(status));
        })

};

export default profileReducer;