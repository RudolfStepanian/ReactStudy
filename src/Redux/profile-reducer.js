import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'hi how are you?', likeCount: 12},
        {id: 2, message: "it's my first post", likeCount: 6},
        {id: 2, message: "it's my second post", likeCount: 3},
        {id: 2, message: "it's my new post", likeCount: 15}
    ],
    newPostText: 'new post text',
    profile: null,
    isFetching: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText, likeCount: 0}],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
};

export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export let setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile: profile});

export const getUserProfile = (userId) =>{
    return (dispatch) =>{
        userAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export default profileReducer;