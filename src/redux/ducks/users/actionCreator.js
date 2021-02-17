import {
    CHANGE_USER_IMAGE_ERROR,
    CHANGE_USER_IMAGE_REQUEST,
    CHANGE_USER_IMAGE_SUCCESS,
    CHANGE_USER_INFORMATION_ERROR, CHANGE_USER_INFORMATION_REQUEST,
    CHANGE_USER_INFORMATION_SUCCESS,
    GET_SELECTED_USER_ERROR,
    GET_SELECTED_USER_REQUEST,
    GET_SELECTED_USER_SUCCESS,
    GET_USER_LIST_ERROR,
    GET_USER_LIST_REQUEST,
    GET_USER_LIST_SUCCESS,
    SHOW_CURRENT_USER_SUCCESS
} from "./actionTypes";
import {projectFirestore, projectStorage, timestamp} from "../../../firebase-config";
import {projectAuth} from "../../../firebase-config";
import {showMessage} from "react-native-flash-message";


export const showCurrentUserSuccess = user => ({
    type: SHOW_CURRENT_USER_SUCCESS,
    payload: user
});

export const fetchCurrentUser = () => async (dispatch, getState,) => {
    const {isAuthenticated} = getState().reAuth;

    if (!isAuthenticated) {
        dispatch(showCurrentUserSuccess(null));
        return Promise.resolve({});
    }

    const currentUser = projectAuth.currentUser;
    let currentUserInFirestore = []
    try {
        await projectFirestore.collection('users').where("userId", '==', currentUser.uid).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const docId = doc.id
                    const data = doc.data()
                    currentUserInFirestore.push({docId, ...data})
                })
            })
        await dispatch(showCurrentUserSuccess(currentUserInFirestore[0]));
    } catch (e) {
        console.log("Error getting cached document:", e);
    }
};


//////////////////////////////////////
export const getUserListRequest = () => ({
    type: GET_USER_LIST_REQUEST
})

export const getUserListError = (payload) => ({
    type: GET_USER_LIST_ERROR,
    payload
})

export const getUserListSuccess = (payload) => ({
    type: GET_USER_LIST_SUCCESS,
    payload
})


export const getUserList = () => dispatch => {
    let userList = [];
    dispatch(getUserListRequest())
    try {
        projectFirestore.collection('users').get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                userList.push(doc.data())
            })
        })
        dispatch(getUserListSuccess(userList))
    } catch (e) {
        dispatch(getUserListError(e))
    }
}


/////////////////////////////////
export const getSelectedUserRequest = () => ({
    type: GET_SELECTED_USER_REQUEST
})

export const getSelectedUserSuccess = (payload) => ({
    type: GET_SELECTED_USER_SUCCESS,
    payload
})

export const getSelectedUserError = (payload) => ({
    type: GET_SELECTED_USER_ERROR,
    payload
})


export const getSelectedUser = (payload) => async (dispatch, getState) => {
    dispatch(getSelectedUserRequest())
    const {userId} = payload
    const {reUsers} = getState()
    try {
        const selectedUser = await reUsers.userList.find(el => el.userId === userId)
        dispatch(getSelectedUserSuccess(selectedUser))
    } catch (e) {
        dispatch(getSelectedUserError(e))
    }
}


//////////////////////////////////////
export const changeUserImageRequest = () => ({
    type: CHANGE_USER_IMAGE_REQUEST
})

export const changeUserImageError = payload => ({
    type: CHANGE_USER_IMAGE_ERROR,
    payload
})

export const changeUserImageSuccess = payload => ({
    type: CHANGE_USER_IMAGE_SUCCESS,
    payload
})

export const changeUserImage = params => async (dispatch, getState) => {
    dispatch(changeUserImageRequest())
    const fileName = params.substring(params.lastIndexOf('/') + 1)
    const ref = projectStorage.ref().child('userImage/' + fileName + Math.random().toString(36).substring(2))
    const {reUsers} = getState()
    try {
        const response = await fetch(params)
        const blob = await response.blob();
        await ref.put(blob)
        const urlPhoto = await ref.getDownloadURL()
        await projectFirestore.collection('users').doc(reUsers.currentUser.docId).update({photo: urlPhoto})
        dispatch(changeUserImageSuccess(urlPhoto))
        showMessage({
            message: "Іmage changed successfully",
            type: "success",
        });
    } catch (e) {
        dispatch(changeUserImageError(e))
        showMessage({
            message: "Something going wrong! Try again",
            type: "danger",
        });
    }
}


//////////////////////////////////////////////

export const changeUserInformationRequest = () => ({
    type: CHANGE_USER_INFORMATION_REQUEST
})

export const changeUserInformationError = payload => ({
    type: CHANGE_USER_INFORMATION_ERROR,
    payload
})

export const changeUserInformationSuccess = payload => ({
    type: CHANGE_USER_INFORMATION_SUCCESS,
    payload
})

export const changeUserInformation = params => async (dispatch, getState) => {
    const {nickName, userName, description} = params
    const {reUsers} = getState()
    dispatch(changeUserInformationRequest())
    try {
        await projectFirestore.collection('users').doc(reUsers.currentUser.docId).update({
            displayName: nickName,
            fullName: userName,
            description
        })
        dispatch(changeUserInformationSuccess(params))
        showMessage({
            message: "Information changed successfully",
            type: "success",
        });
    } catch (e) {
        dispatch(changeUserInformationError(e))
        showMessage({
            message: "Something going wrong! Try again",
            type: "danger",
        });
    }
}


