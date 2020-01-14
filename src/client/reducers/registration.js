const initState = {
    isRegistrationInProgress: false,
    isRegistred: false,
    registrationError: null,
    user: null
}

export const registrationReducer = (state = initState, action) => {
    switch (action.type) {
        case "REGISTRATION_STARTS":
            return { ...state, isRegistrationInProgress: true, registrationError: null }
        case "REGISTRATION_SUCCESS":
            return { ...state, isRegistrationInProgress: false, registrationError: null, isRegistred: true, user: action.data.user }
        case "REGISTRATION_ERROR":
            return { ...state, isRegistrationInProgress: false, registrationErrorauthError: action.data.error, isRegistred: false, user: null }
        default:
            return state
    }
}