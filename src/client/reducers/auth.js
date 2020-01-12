const initState = {
    user: null
}

export const registerReducer = (state=initState, action) => {
    console.log("inside registerReducer")
    switch(action.type) {
        case "REGISTER_USER":
            return {...state, user: action.data.user}
        default: 
            return state
    }
}





