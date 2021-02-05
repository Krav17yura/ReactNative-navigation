import {
    AUTH_INFO_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNUP_ERROR,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS
} from "./actionTypes";

import {showCurrentUserSuccess} from "../currentUser/actionCreator";
import {projectAuth, firebase} from "../../../firebase-config";


export const authInfoSuccess = user => {
    return {
        type: AUTH_INFO_SUCCESS,
        payload: user
    }
}

export const loginRequest = () => ({
        type: LOGIN_REQUEST
    }
);
export const loginSuccess = () => ({
        type: LOGIN_SUCCESS
    }
);
export const loginError = e => ({
        type: LOGIN_ERROR,
        payload: e
    }
);

export const signupRequest = () => ({
        type: SIGNUP_REQUEST
    }
);
export const signupSuccess = () => ({
        type: SIGNUP_SUCCESS
    }
);
export const signupError = e => ({
        type: SIGNUP_ERROR,
        payload: e
    }
);


export const logoutRequest = () => ({
        type: LOGOUT_REQUEST
    }
);
export const logoutSuccess = () => ({
        type: LOGOUT_SUCCESS
    }
);
export const logoutError = e => ({
        type: LOGOUT_ERROR,
        payload: e
    }
);


export const login = (params) => (dispatch) => {
    const {email, password} = params
    console.log('login')
    dispatch(loginRequest());
    return projectAuth.signInWithEmailAndPassword(email, password)
        .then(() => dispatch(loginSuccess()))
        .catch(e => {
            dispatch(loginError(e));
        });
};

export const signup = params => (dispatch) => {
    const {email, password, nickName} = params;
    dispatch(signupRequest());
    return projectAuth.createUserWithEmailAndPassword(email, password)
        .then(res => res.currentUser.updateProfile({displayName: nickName}))
        .then(() => dispatch(signupSuccess()))
        .catch(e => {
            dispatch(signupError(e));
            throw e;
        });
};

export const logout = () => (dispatch) => {
    console.log("Hello")
    dispatch(logoutRequest());
    return projectAuth.signOut()
        .then(() => dispatch(logoutSuccess()))
        .then(() => dispatch(showCurrentUserSuccess(null)))
        .catch(e => {
            dispatch(logoutError(e));
            throw e;
        });
};