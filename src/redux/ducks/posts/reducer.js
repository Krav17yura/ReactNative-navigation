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

const rePosts = (state = {
    addPostInProgress: false,
    addPostError: null,

    postList: null,
    getPostsError: null,
    getPostsInProgress: false,

    selectedPost: null,
    getSelectedPostError: false,
    getSelectedPostInProgress: false,

    selectedUserPostList: null,
    getSelectedUserPostListError: false,
    getSelectedUserPostLisInProgress: false

}, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostInProgress: true,
                addPostError: null
            };
        case ADD_POST_ERROR:
            return {
                ...state,
                addPostInProgress: false,
                addPostError: action.payload
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                addPostInProgress: false,
                addPostError: null
            }


        case GET_POSTS_REQUEST:
            return {
                ...state,
                getPostsInProgress: true,
                getPostsError: null
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                getPostsInProgress: false,
                getPostsError: action.payload
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                postList: action.payload,
                getPostsInProgress: false,
                getPostsError: null
            }


        case GET_SELECTED_POST_REQUEST:
            return {
                ...state,
                selectedPost: null,
                getSelectedPostError: false,
                getSelectedPostInProgress: true
            }
        case GET_SELECTED_POST_ERROR:
            return {
                ...state,
                selectedPost: null,
                getSelectedPostError: action.payload,
                getSelectedPostInProgress: false
            }
        case GET_SELECTED_POST_SUCCESS:
            return {
                ...state,
                selectedPost: action.payload,
                getSelectedPostError: false,
                getSelectedPostInProgress: false
            }


        case GET_SELECTED_USER_POST_LIST_REQUEST:
            return {
                ...state,
                selectedUserPostList: null,
                getSelectedUserPostListError: false,
                getSelectedUserPostLisInProgress: true
            }
        case GET_SELECTED_USER_POST_LIST_ERROR:
            return {
                ...state,
                selectedUserPostList: null,
                getSelectedUserPostListError: action.payload,
                getSelectedUserPostLisInProgress: false
            }
        case GET_SELECTED_USER_POST_LIST_SUCCESS:
            return {
                ...state,
                selectedUserPostList: action.payload,
                getSelectedUserPostListError: false,
                getSelectedUserPostLisInProgress: false
            }
        default:
            return state;
    }
};

export default rePosts;