const initState = {
    tagList: null
}

export const tagReducer = (state=initState, action) => {
    switch(action.type) {
        case "LIST_ALL_TAGS":
            return {...state, tagList: action.data}
        default: 
            return state
    }
}







