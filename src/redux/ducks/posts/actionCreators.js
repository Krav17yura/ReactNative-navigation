import {
    ADD_POST_ERROR,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    GET_POSTS_ERROR,
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_SELECTED_POST_ERROR,
    GET_SELECTED_POST_REQUEST,
    GET_SELECTED_POST_SUCCESS,
    GET_SELECTED_USER_POST_LIST_ERROR,
    GET_SELECTED_USER_POST_LIST_REQUEST,
    GET_SELECTED_USER_POST_LIST_SUCCESS
} from "./actionTypes";
import {projectFirestore, projectStorage, timestamp} from "../../../firebase-config";
import {showMessage} from "react-native-flash-message";


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
    const {reUsers} = getState()

    try {
        const response = await fetch(image)
        const blob = await response.blob();
        await ref.put(blob)
        const urlPhoto = await ref.getDownloadURL()
        await projectFirestore.collection('posts').add({
            markerCord,
            description,
            urlPhoto,
            currentUserId: reUsers.currentUser.userId,
            timestamp
        })
        dispatch(addPostSuccess())
        showMessage({
            message: "Success",
            type: "success",
        });
    } catch (e) {
        dispatch(addPostError(e))
        showMessage({
            message: "Something going wrong! Try again",
            type: "danger",
        });
    }
}


/////////////////////////////////////////////
export const getPostsRequest = () => {
    return {
        type: GET_POSTS_REQUEST
    }
}

export const getPostsSuccess = payload => {
    return {
        type: GET_POSTS_SUCCESS,
        payload
    }
}

export const getPostsError = payload => {
    return {
        type: GET_POSTS_ERROR,
        payload
    }
}


export const getPosts = () => async (dispatch, getState) => {
    dispatch(getPostsRequest())
    const {reUsers} = getState()
    let postList = []
    try {
        projectFirestore.collection('posts').get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                const docId = doc.id
                const data = doc.data()

                const postOwner = reUsers.userList.find(el => el.userId === data.currentUserId)
                postList.unshift({...data, postOwner, docId})
            })
        })
        dispatch(getPostsSuccess(postList))
    } catch (e) {
        dispatch(getPostsError(e))
    }
}

///////////////////////////////////////
export const getSelectedPostRequest = () => ({
    type: GET_SELECTED_POST_REQUEST
})

export const getSelectedPostError = payload => ({
    type: GET_SELECTED_POST_ERROR,
    payload
})

export const getSelectedPostSuccess = payload => ({
    type: GET_SELECTED_POST_SUCCESS,
    payload
})

export const getSelectedPost = (params) => (dispatch, getState) => {
    dispatch(getSelectedPostRequest())
    const {postId} = params
    const {reUsers} = getState()
    let selectedPost = []
    try {
        projectFirestore.collection('posts').doc(postId).then(doc => {
            const docId = doc.id
            const data = doc.data()
            const postOwner = reUsers.userList.find(el => el.userId === data.currentUserId)
            selectedPost.push({docId, ...data, postOwner})
        })
        dispatch(getSelectedPostSuccess(selectedPost))
    } catch (e) {
        dispatch(getSelectedPostError(e))
    }
}

//////////////////////////////////////////////////////////
export const getSelectedUserPostListRequest = () => ({
    type: GET_SELECTED_USER_POST_LIST_REQUEST
})

export const getSelectedUserPostListError = payload => ({
    type: GET_SELECTED_USER_POST_LIST_ERROR,
    payload
})

export const getSelectedUserPostListSuccess = payload => ({
    type: GET_SELECTED_USER_POST_LIST_SUCCESS,
    payload
})


export const getSelectedUserPostList = params => (dispatch, getState) => {
    dispatch(getSelectedUserPostListRequest())
    const {userId} = params
    const {reUsers} = getState()
    let selectedUserPostList = [];
    try {
        projectFirestore.collection('posts').where('currentUserId', '==', userId).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const docId = doc.id
                const data = doc.data()
                const postOwner = reUsers.userList.find(el => el.userId === data.currentUserId)
                selectedUserPostList.unshift({docId, ...data, postOwner})
            })
        })
        dispatch(getSelectedUserPostListSuccess(selectedUserPostList))
    } catch (e) {
        dispatch(getSelectedUserPostListError(e))
    }
}

