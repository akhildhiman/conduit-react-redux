const initState = {
    articleList: null
}

export const articleReducer = (state=initState, action) => {
    // console.log("inside article reducer")
    switch(action.type) {
        case "LIST_ALL_ARTICLES":
            return {...state, articleList: action.data}
        default:
            return state
    }
}
