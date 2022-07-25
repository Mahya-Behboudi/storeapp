import React, { Component } from 'react'
// import styles from 'style-component';
import Imge from '../images/Apple.png';
import Styles from './Aboutus.module.css';
export default class Aboutus extends Component {

  render() {
    return (
      <div>
        <h1> Hi guys  :)Iam Mahya a junior web front end developer  ! </h1>
        <img className={Styles.image} src={Imge} alt="apple" />
      </div>
    )
  }
}
