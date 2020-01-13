import React, { Component } from "react"
import { registerAction } from "../actions/auth"
import { connect } from "react-redux"
import validator from "validator"

class Register extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        console.log("inside handle submit")
        const {username, email, password} = this.state
        if (!email || !password || !username) {
            return alert("Usename, email and password are must")
        }
        if (username.length < 1) {
            return alert("Username is required")
        }
        if (username.length > 20) {
            return alert("Username is too long")
        }
        if (!validator.isEmail(email)) {
            return alert("Invalid email")
        }
        event.preventDefault()
        const registerData = { user: this.state }
        this.props.dispatch(registerAction(registerData))
        this.props.history.push("/login")
    }

    render() {
        // console.log(this.props)
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Sign Up</h1>
                <p>Have an account?</p>

                <input
                    onChange={this.handleChange}
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="Username"
                />
                <br></br>

                <input onChange={this.handleChange}
                    type="email"
                    name="email"
                    value={this.state.email}
                    placeholder="Email"
                />
                <br></br>

                <input
                    onChange={this.handleChange}
                    type="password" name="password"
                    value={this.state.password}
                    placeholder="Password"
                />
                <br></br>

                <button type="submit" onClick={this.handleSubmit}>Sign up</button>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return store
}


export default connect(mapStateToProps)(Register)