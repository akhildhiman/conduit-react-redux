import axios from "axios"

export const registerAction = (registerData) => {
    // console.log("inside register action")
    return async dispatch => {
        dispatch({
            type: "REGISTRATION_STARTS"
        })
        try {
            const res = await axios.post("https://conduit.productionready.io/api/users", registerData)
            dispatch({
                type: "REGISTRATION_SUCCESS",
                data: { user: res.data }
            })
        } catch (err) {
            dispatch({
                type: "REGISTRATION_ERROR",
                data: { error: "Something went wrong" }
            })
        }
    }
}