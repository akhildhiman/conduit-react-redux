import React, { Component } from "react"
import { loginAction } from "../actions/auth"
import { connect } from "react-redux"

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

    handleSubmit = (event) => {
        console.log("inside handle submit")
        event.preventDefault()
        const { email, password } = this.state
        if (!email || !password) {
            return alert("Email or password is invalid")
        }
        const loginData = { user: this.state }
        this.props.dispatch(loginAction(loginData))
        this.props.history.push("/")
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Sign In</h1>
                <p>Need an account?</p>

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

                <button type="submit" onClick={this.handleSubmit}>Sign in</button>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return store
}


export default connect(mapStateToProps)(Login)