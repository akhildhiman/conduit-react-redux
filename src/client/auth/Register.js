import React, { Component } from "react"
import { registerAction } from "../actions/auth"
import { connect } from "react-redux"

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
        event.preventDefault()
        const formData = { user: this.state }
        this.props.dispatch(registerAction(formData))
        this.props.history.push("/login")
    }

    render() {
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