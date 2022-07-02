import React, { Component } from 'react';
import styles from "./Cards.module.css"
import Card from "./Card";
import iphone1 from "../images/iphone1.png";
import iphone2 from "../images/iphone2.png";
import iphone3 from "../images/iphone3.png";
import iphone4 from "../images/iphone4.png";

class cards extends Component {
    constructor() {
        super();
        this.state ={
            phoneData : [
                {id:1,image:iphone1, dis:"iphone2",badget:"400 $"},
                {id:2,image:iphone2, dis:"iphone1",badget:"500 $"},
                {id:3,image:iphone3, dis:"iphone4",badget:"900 $"},
                {id:4,image:iphone4, dis:"iphone4",badget:"700 $"}
            ]
        }
    }
    render() {
            const {phoneData} = this.state;
        return (
            <div className={styles.container}>
                {/* <Card image={iphone2} dis="iphone1" badget="500 $"/>
                <Card image={iphone1} dis="iphone2" badget="400 $"/>
                <Card image={iphone3} dis="iphone3" badget="650 $"/>
                <Card image={iphone4} dis="iphone4" badget="800 $"/> */}
                {phoneData.map(phone =><Card key={phone.id}  image={phone.image} dis={phone.dis} badget={phone.badget}/>)}
            </div>
        );
    }
}

export default cards;