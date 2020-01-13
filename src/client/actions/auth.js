export const registerAction = (registerData) => {
    console.log("inside register action")
    return dispatch => {
        fetch("https://conduit.productionready.io/api/users", {
            method: "POST",
            body: JSON.stringify(registerData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            // console.log(data.user.token)
            dispatch({
                type: "REGISTER_USER",
                data: {user: data}
            })
        })  
    }
}


export const loginAction = (loginData) => {
    console.log("inside login action")
    return dispatch => {
        fetch("https://conduit.productionready.io/api/users/login", {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            dispatch({
                type: "LOGIN_USER",
                data: {user: data}
            })
            localStorage.setItem("authToken", data.user.token)
        })
    }
}






