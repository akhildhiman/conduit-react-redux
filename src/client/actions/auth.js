export const registerAction = (formData) => {
    console.log("inside register action")
    return dispatch => {
        fetch("https://conduit.productionready.io/api/users", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            dispatch({
                type: "REGISTER_USER",
                data: {user: data}
            })
        })  
    }
}
