import { combineReducers } from "redux"
import { authReducer } from "../reducers/auth"
import { articleReducer } from "../reducers/articles"
import { tagReducer } from "../reducers/tags"
import { registrationReducer } from "../reducers/registration"


const rootReducer = combineReducers({
    registrationReducer, authReducer, articleReducer, tagReducer
})


export default rootReducer