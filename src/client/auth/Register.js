import React, { Component } from "react"

class Register extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        console.log(this.state)
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Sign Up</h1>
                <p>Have an account?</p>

                <input onChange={this.handleChange} type="username" placeholder="Username" /><br></br>
                <input onChange={this.handleChange} type="email" placeholder="Email" /><br></br>
                <input onChange={this.handleChange} type="password" placeholder="Password" /><br></br>

                <button>Sign up</button>
            </div>
        )
    }
}



export default Register