import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logoPath from "../logo/trendpatil_logo.png";
import profileIconPath from "../logo/profile.png";
import cartIconPath from "../logo/shopping-cart.png";

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3 sticky-top" style={{ backgroundColor: 'grey' }}>
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
                    <img src={logoPath} alt="TrendPatil Logo" height="80" />
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        {/* Add nav items here if needed */}
                    </ul>
                    <div className="buttons text-center">
                        <div className="position-relative d-inline-block">
                            <button className="btn btn-outline-dark m-2" onClick={toggleProfileDropdown} style={{ border: 'none', background: 'transparent' }}>
                                <img src={profileIconPath} alt="Profile" height="30" />
                            </button>
                            {isProfileDropdownOpen && (
                                <div className="dropdown-menu show position-absolute" style={{ top: '100%', left: 0, zIndex: 1 }}>
                                    <NavLink to="/login" className="dropdown-item btn btn-outline-dark m-0"><i className="fa fa-sign-in-alt mr-1"></i> Sign in</NavLink>
                                    <NavLink to="/register" className="dropdown-item btn btn-outline-dark m-0"><i className="fa fa-user-plus mr-1"></i> Sign up</NavLink>
                                </div>
                            )}
                        </div>
                        <NavLink to="/cart" className="btn m-2" style={{ border: 'none' }}>
                            <img src={cartIconPath} alt="Shopping Cart" height="30" /> ({state.length})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar