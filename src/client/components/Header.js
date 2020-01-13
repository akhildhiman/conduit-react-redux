import React from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';


const Header = () => {

    handleClick = (e) => {
        e.preventDefault()
        localStorage.clear()
        // this.props.history.push("/")
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                Conduit
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Sign in</Link>
                <Link to="/register">Sign up</Link>
                {
                    localStorage.authToken ?
                    <button onClick={this.handleClick}>Logout</button>
                    :
                    null
                }
            </div>
        </div>
    );
}


const mapStateToProps = (store) => {
    return store
}
export default connect(mapStateToProps)(Header) 