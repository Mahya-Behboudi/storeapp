import React, { Component } from 'react';
import styled from "../components/Banner.module.css";
import landing from "../images/landing.png"

class Banner extends Component {
    render() {
        return (
      <>
            <div className={styled.container}>
                <img src={landing} alt=''/>
            </div>
            <div className={styled.bannerTitle}>
                <h1>Bootostart</h1>
                <p>We're learning <span>React.js</span></p>
            </div>
      </>
        
        );
    }
}

export default Banner;