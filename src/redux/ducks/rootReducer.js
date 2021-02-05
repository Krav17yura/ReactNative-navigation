import {combineReducers} from "redux";
import reAuth from "./auth/reducer";
import reCurrentUser from "./currentUser/reducer";

const rootReducer = combineReducers({
    reAuth,
    reCurrentUser
})

export default rootReducer