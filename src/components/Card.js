import React, { Component } from 'react';
import styles from "./Card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";

class Card extends Component {
    constructor(){
        super();
        this.state={
            counter:0,
        }
    }
    downHandler= ()=>{
        if(this.state.counter>=1) {
            this.setState(prevState =>({
                counter : prevState.counter -1,
            }))
        }
    }
    upHandler= () =>{
       
            this.setState(prevState =>({
                counter:prevState.counter+1,
            }))
        
    }
    // const {image} = this.props;
    render() {
        const {counter} = this.state;
        const {image ,dis,badget} = this.props
        return (
            <div className={styles.container}>
                    <img  src={image} alt='iphone'/>
                    <h3>{dis}</h3>
                    <span className={styles.span}>{badget}{counter?`*${counter} = ${counter * Number(badget.split(" ")[0])} $`: ""}</span>
                
                <div className={styles.counter}>
                    <img className={!counter? styles.deactive : ''} src={down} alt="down" onClick={this.downHandler}/>
                    <span>{counter}</span>
                    <img src={up} alt="up" onClick={this.upHandler}/>
                </div>
            </div>
        );
    }
}

export default Card;