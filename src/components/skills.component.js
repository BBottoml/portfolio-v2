import React, { Component } from 'react'
import { fadeIn, fadeInUp, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium'
import './landing.css'

const styles = {
    fadeIn: {
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }, 
    fadeInUp: {
        animation: 'x 1.5s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }, 
    fadeInDown: {
        animation: 'x 1s', 
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
  }

export default class Skills extends Component {


    render() {
        return(
            <div>
            <StyleRoot>
                <div className='text-center' style={{paddingTop: "5%"}}>
                    <div style={styles.fadeInDown}>
                        <h1 style={{fontWeight: "150", fontSize: "60px"}}>Skills</h1>
                    </div>
                    <div className='container' style={styles.fadeIn}>
                        <hr className='landing' />
                    </div>
                </div>
                <div style={styles.fadeInUp}>
                    <div className='container'>
                        <h2 style={{fontWeight: "150", fontSize: "40px"}}>Languages</h2>
                        <p align='justify'>
                            Java - Python - Javascript - C - C++ - SQL - HTML/CSS
                        </p>
                        <hr className='landing2' /> 
                        <h2 style={{fontWeight: "150", fontSize: "40px"}}>Technologies</h2>
                        <p align='justify'>
                            React.js - Node.js - Flask - MongoDB - MySQL - Selenium - Git - Azure - Heroku
                        </p>
                    </div>
                </div>
                </StyleRoot>
            </div>
        )
    }
}