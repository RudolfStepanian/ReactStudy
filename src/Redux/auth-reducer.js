import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export let setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getMyPage = () => (dispatch) => {
    authAPI.myPage().then(data => {
        if (data.resultCode == 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

export const login = (email, password, rememberMe = false) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode == 0) {
            dispatch(getMyPage());
        }
    });
};

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode == 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
};


export default authReducer;