import {combineReducers} from "redux";
import reAuth from "./auth/reducer";
import reCurrentUser from "./currentUser/reducer";
import rePosts from "./posts/reducer";

const rootReducer = combineReducers({
    reAuth,
    reCurrentUser,
    rePosts,
})

export default rootReducer