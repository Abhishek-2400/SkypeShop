import React, { useState, useEffect } from 'react';
import './Navbar.css';
import navlogo from '../../assets/logo.png';
import profilelogo from '../../assets/nav-profile.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            setLogin(true);
        }
    }, []);

    const logouthandler = () => {
        localStorage.removeItem('auth-token');
        setLogin(false);
        window.location = "/";
    };

    return (
        <div className='navcont'>
            <div className='navbar'>
                <div className="images">
                    <div className="img1">
                        <Link to='/'>
                            <img src={navlogo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="logbut">
                        {!login ? (
                            <button style={{ background: "white", cursor: "none" }}></button>
                        ) : (
                            <button onClick={logouthandler}>Logout</button>
                        )}
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Navbar;
