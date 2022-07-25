import React from 'react';
import styles from "./Navbar.module.css";
import Logo from "../images/logo.jpg"
// import { Link  } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.List}>
                    <li><Link to='/Products'>Products</Link></li>
                    <li><Link to="/Landing">Home page</Link></li>
                    <li><Link to="/Aboutus">About us</Link></li>
                </ul>
            </div>
            <div className={styles.Logo}>
                <img src={Logo} alt="LOgo"/>
            </div>
        </header>
    );
};

export default Navbar;