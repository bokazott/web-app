import './Navbar.css'
import React from 'react';


import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/favourites" className="nav-link">
                                Favourites
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/history" className="nav-link">
                                History
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">
                                Profile
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;