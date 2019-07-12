import {combineReducers} from "redux"
import postsReducer from './postReducer'
import userReducer from "./userReducer"

//--- we can combine all the individual reducers inside the reducer dir. using the combineReducer fuction inside the redux library
export default combineReducers({
    posts:postsReducer,
    user:userReducer
})