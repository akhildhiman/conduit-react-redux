import React, { Component } from "react"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Sign In</h1>
                <p>Need an account?</p>

                <input type="email" placeholder="Email" /><br></br>
                <input type="password" placeholder="Password" /><br></br>

                <button>Sign in</button>
            </div>
        )
    }
}



export default Login