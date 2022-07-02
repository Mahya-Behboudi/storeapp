import React from 'react';
import styles from "./Logos.module.css";
import iphone5 from "../images/iphone5.png";
import iphone6 from "../images/iphone6.png";
import iphone7 from "../images/iphone7.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who support us</h3>
            <div>
                <img src={iphone5} alt="logo"/>
                <img src={iphone6} alt="logo"/>
                <img src={iphone7} alt="logo"/>
              
            </div>
        </div>
    );
};

export default Logos;