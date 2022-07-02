import React from 'react';
import styles from "./Navbar.module.css";
import Logo from "../images/logo.jpg"

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.List}>
                    <li>Home page</li>
                    <li>Products</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className={styles.Logo}>
                <img src={Logo} alt="LOgo"/>
            </div>
        </header>
    );
};

export default Navbar;