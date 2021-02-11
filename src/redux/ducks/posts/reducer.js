import {ADD_POST_ERROR, ADD_POST_REQUEST, ADD_POST_SUCCESS} from "./actionTypes";

const rePosts = (state = {
    addPostInProgress: false,
    addPostError: null,
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
        default:
            return state;
    }
};

export default rePosts;