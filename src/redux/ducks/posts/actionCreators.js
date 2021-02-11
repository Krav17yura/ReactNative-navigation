import {ADD_POST_ERROR, ADD_POST_REQUEST, ADD_POST_SUCCESS} from "./actionTypes";
import {projectFirestore, projectStorage, timestamp} from "../../../firebase-config";

export const addPostRequest = () => {
    return {
        type: ADD_POST_REQUEST
    }
}

export const addPostSuccess = () => {
    return {
        type: ADD_POST_SUCCESS
    }
}

export const addPostError = payload => {
    return {
        type: ADD_POST_ERROR,
        payload
    }
}


export const addPost = (params) => async (dispatch, getState) => {
    dispatch(addPostRequest())

    const {image, markerCord, value} = params
    const {description} = value

    const fileName = image.substring(image.lastIndexOf('/') + 1)
    const ref = projectStorage.ref().child('images/' + fileName)
    const {reCurrentUser} = getState()


    try {
        const response = await fetch(image)
        const blob = await response.blob();
        await ref.put(blob)
        const urlPhoto = await ref.getDownloadURL()
        await projectFirestore.collection('posts').add({
            markerCord,
            description,
            urlPhoto,
            currentUserId: reCurrentUser.currentUser.uid,
            timestamp
        })
        dispatch(addPostSuccess())
    } catch (e) {
        dispatch(addPostError(e))
    }

}