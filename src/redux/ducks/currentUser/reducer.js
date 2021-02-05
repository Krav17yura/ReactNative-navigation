import {SHOW_CURRENT_USER_REQUEST, SHOW_CURRENT_USER_SUCCESS} from "./actionTypes";

const reCurrentUser = (state = {
    currentUser: null
}, action) => {
    switch (action.type) {
        case SHOW_CURRENT_USER_REQUEST:
            return state;
        case SHOW_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default reCurrentUser;