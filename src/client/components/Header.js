import React from 'react';
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                Conduit
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Sign in</Link>
                <Link to="/register">Sign up</Link>
            </div>
        </div>
    );
}

export default Header