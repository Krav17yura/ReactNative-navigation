import {combineReducers} from "redux";
import reAuth from "./auth/reducer";
import rePosts from "./posts/reducer";
import reUsers from "./users/reducer";

const rootReducer = combineReducers({
    reAuth,
    reUsers,
    rePosts,
})

export default rootReducer