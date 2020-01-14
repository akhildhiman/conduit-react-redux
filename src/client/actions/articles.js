export const listAllArticles = () => {
    // console.log("inside listAllArticles action creator")
    return dispatch => {
        fetch("https://conduit.productionready.io/api/articles")
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "LIST_ALL_ARTICLES",
                    data: data.articles
                })
            })
    }
}



