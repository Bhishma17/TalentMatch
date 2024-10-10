import React from 'react';
import './Navbar.css'; // Import Navbar CSS

const Navbar = ({ user, onLogout }) => {
    return (
        <nav>
            <span className="navbar-title">Job Portal</span>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/jobs">Jobs</a></li>
                {user && <li><a href="/postjob">Post Job</a></li>}
                {user ? (
                    <>
                        <li><span style={{ fontWeight: 'bold' }}>Hello, {user}</span></li>
                        <li><button style={{ background: 'red' }} onClick={onLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
