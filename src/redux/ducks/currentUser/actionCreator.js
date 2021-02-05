import {SHOW_CURRENT_USER_REQUEST, SHOW_CURRENT_USER_SUCCESS} from "./actionTypes";
import {transformUserData} from "../../../helpers";
import {projectFirestore} from "../../../firebase-config";
import {projectAuth} from "../../../firebase-config";

export const showCurrentUserRequest = () => (
    {
        type: SHOW_CURRENT_USER_REQUEST
    }
);

export const showCurrentUserSuccess = user => ({
    type: SHOW_CURRENT_USER_SUCCESS, payload: user
});




export const fetchCurrentUser = () => async (dispatch, getState,) => {
    const {isAuthenticated} = getState().reAuth;

    if (!isAuthenticated) {
        dispatch(showCurrentUserSuccess(null));
        return Promise.resolve({});
    }

    const currentUser = projectAuth.currentUser;

    // let currentUserInFirestore = []
    // await projectFirestore.collection('users').where("id", '==', currentUser.uid).get()
    //     .then(querySnapshot => {
    //         querySnapshot.forEach(doc => (
    //             currentUserInFirestore.push(doc.data())
    //         ))
    //     })
    //     .catch(e => {
    //         console.log("Error getting cached document:", e);
    //     })

    await dispatch(showCurrentUserSuccess(currentUser)/*(transformUserData(currentUser, currentUserInFirestore))*/);
};