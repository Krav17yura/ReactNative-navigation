import {
    AUTH_INFO_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS, SIGNUP_ERROR,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS
} from "./actionTypes";

const reAuth = (state = {
    isAuthenticated: false,

    loginInProgress: false,
    loginError: null,

    signupInProgress: false,
    signupError: null,

    logoutInProgress: false,
    logoutError: null
}, action) => {

    switch (action.type) {
        case AUTH_INFO_SUCCESS:
            return {
                ...state,
                isAuthenticated: !!action.payload
            };

        case LOGIN_REQUEST:
            return {
                ...state,
                loginInProgress: true,
                loginError: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginInProgress: false,
                isAuthenticated: true
            };
        case LOGIN_ERROR:
            return {
                ...state,
                loginInProgress: false,
                loginError: action.payload
            };

        case SIGNUP_REQUEST:
            return {
                ...state,
                signupInProgress: true,
                signupError: null
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signupInProgress: false,
                isAuthenticated: true
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                signupInProgress: false,
                signupError: action.payload
            };

        case LOGOUT_REQUEST:
            return {
                ...state,
                logoutInProgress: true,
                logoutError: null
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                logoutInProgress: false,
                isAuthenticated: false
            };
        case LOGOUT_ERROR:
            return {
                ...state,
                logoutInProgress: false,
                logoutError: action.payload
            };
        default:
            return state;
    }
};

export default reAuth;