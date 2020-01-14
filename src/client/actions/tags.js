export const listAllTags = () => {
    // console.log("inside listtAllTags action creator")
    return dispatch => {
        fetch("https://conduit.productionready.io/api/tags")
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "LIST_ALL_TAGS",
                    data: data.tags
                })
            })
    }
}   



