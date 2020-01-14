import axios from "axios"

export const loginAction = (loginData, cb) => {
    console.log("inside login action")
    return async dispatch => {
        dispatch({
            type: "AUTH_STARTS"
        })
        try {
            const res = await axios.post("https://conduit.productionready.io/api/users/login", loginData)
            dispatch({
                type: "AUTH_SUCCESS",
                data: { user: res.data }
            })
            localStorage.setItem("authToken", res.data.token)
            cb()
        } catch (err) {
            dispatch({
                type: "AUTH_ERROR",
                data: { error: "Something went wrong" }
            })
        }
    }
}