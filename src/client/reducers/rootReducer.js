import { combineReducers } from "redux"
import { registerReducer } from "../reducers/auth"

const rootReducer = combineReducers({
    registerReducer
})

export default rootReducer