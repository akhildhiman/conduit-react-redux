import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { compose } from "redux"


class Header extends Component {

    render() {
        console.log(this.props.authReducer.isAuthenticated)
        return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    Conduit
                </div>
                <div>
                    {
                        this.props.authReducer.isAuthenticated ?
                            <div>
                                <Link to="/">Home</Link>
                                <Link to="/login">New Article</Link>
                                <Link to="/register">Settings</Link>
                                {/* <span>{this.props.authReducer.user.usename}</span> */}
                            </div>
                            :
                            <div>
                                <Link to="/">Home</Link>
                                <Link to="/login">Sign in</Link>
                                <Link to="/register">Sign up</Link>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return store
}


export default compose(
    withRouter,
    connect(mapStateToProps)
)(Header);
