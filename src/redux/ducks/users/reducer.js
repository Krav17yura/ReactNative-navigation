import {
    CHANGE_USER_IMAGE_ERROR,
    CHANGE_USER_IMAGE_REQUEST, CHANGE_USER_IMAGE_SUCCESS,
    CHANGE_USER_INFORMATION_ERROR,
    CHANGE_USER_INFORMATION_REQUEST, CHANGE_USER_INFORMATION_SUCCESS,
    GET_SELECTED_USER_ERROR,
    GET_SELECTED_USER_REQUEST, GET_SELECTED_USER_SUCCESS,
    GET_USER_LIST_ERROR,
    GET_USER_LIST_REQUEST,
    GET_USER_LIST_SUCCESS,
    SHOW_CURRENT_USER_SUCCESS
} from "./actionTypes";

const reUsers = (state = {
    currentUser: null,

    userList: null,
    userListError: false,
    userListInProgress: false,

    selectedUser: null,
    selectedUserError: false,
    selectedUserInProgress: false,

    changeUserInformationError: false,
    changeUserInformationInProgress: false,

    changeUserImageError: false,
    changeUserImageInProgress: false
}, action) => {
    switch (action.type) {

        case SHOW_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            };

        case GET_USER_LIST_SUCCESS:
            return {
                ...state,
                userList: action.payload,
                userListInProgress: false
            }
        case GET_USER_LIST_ERROR:
            return {
                ...state,
                userListError: action.payload,
                userList: null,
                userListInProgress: false
            }
        case GET_USER_LIST_REQUEST:
            return {
                ...state,
                userListError: false,
                userListInProgress: true,
                userList: null,
            }

        case GET_SELECTED_USER_REQUEST:
            return {
                ...state,
                selectedUser: null,
                selectedUserError: false,
                selectedUserInProgress: true
            }
        case GET_SELECTED_USER_ERROR:
            return {
                ...state,
                selectedUser: null,
                selectedUserError: action.payload,
                selectedUserInProgress: false
            }
        case GET_SELECTED_USER_SUCCESS:
            return {
                ...state,
                selectedUser: action.payload,
                selectedUserError: false,
                selectedUserInProgress: false
            }

        case CHANGE_USER_INFORMATION_REQUEST:
            return {
                ...state,
                changeUserInformationError: false,
                changeUserInformationInProgress: true,
            }
        case CHANGE_USER_INFORMATION_ERROR:
            return {
                ...state,
                changeUserInformationError: action.payload,
                changeUserInformationInProgress: false,
            }
        case CHANGE_USER_INFORMATION_SUCCESS:
            const {nickName, userName, description} = action.payload
            return {
                ...state,
                changeUserInformationError: false,
                changeUserInformationInProgress: false,
                currentUser: {...state.currentUser, displayName: nickName, fullName: userName, description}
            }

        case CHANGE_USER_IMAGE_REQUEST:
            return {
                ...state,
                changeUserImageError: false,
                changeUserImageInProgress: true
            }
        case CHANGE_USER_IMAGE_ERROR: {
            return {
                ...state,
                changeUserImageError: action.payload,
                changeUserImageInProgress: false
            }
        }
        case CHANGE_USER_IMAGE_SUCCESS:
            return {
                ...state,
                changeUserImageError: false,
                changeUserImageInProgress: false,
                currentUser: {...state.currentUser, photo: action.payload}
            }
        default:
            return state;
    }
};

export default reUsers;