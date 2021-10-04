import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (

        <div className="container-fluid bg-header ">
               <div className="container p-3">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    
                <NavLink className="navbar-brand" to="/">ACADEMIA</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/allCourses">All Courses</NavLink>
                        <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                        
                    </div>
                    </div>
                </div>
                </nav>
            </div>
        </div>
     
    );
};

export default Header;