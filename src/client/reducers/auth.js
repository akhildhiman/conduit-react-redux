const initState = {
    isAuthInProgress: false,
    isAuthenticated: false,
    authError: null,
    user: null
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "AUTH_STARTS":
            return { ...state, isAuthInProgress: true, authError: null }
        case "AUTH_SUCCESS":
            return { ...state, isAuthInProgress: false, authError: null, isAuthenticated: true, user: action.data.user }
        case "AUTH_ERROR":
            return { ...state, isAuthInProgress: false, authError: action.data.error, isAuthenticated: false, user: null }
        default:
            return state
    }
}






