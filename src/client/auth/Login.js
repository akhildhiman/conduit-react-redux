import React from "react"

const Login = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Sign In</h1>
            <p>Need an account?</p>

            <input type="email" placeholder="Email" /><br></br>
            <input type="password" placeholder="Password" /><br></br>

            <button>Sign in</button>
        </div>
    )
}



export default Login