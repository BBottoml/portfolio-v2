import React, { Component } from 'react';
import { fadeIn, fadeInUp, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {PageView, initGA} from './Tracking/index';
import './landing.css';

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
    componentDidMount() {
        initGA('UA-158286562-1');
        PageView();
    }

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
                            C++ - C - Java - Python - Javascript - SQL - HTML/CSS
                        </p>
                        <hr className='landing2' /> 
                        <h2 style={{fontWeight: "150", fontSize: "40px"}}>Technologies &amp; Tools</h2>
                        <p align='justify'>
                            AWS (Lambda, EC2, S3, DynamoDB) - Azure - Boost - STL - CMake - React.js - Node.js - Flask - MongoDB - MySQL - Git - Selenium
                        </p>
                    </div>
                </div>
                </StyleRoot>
            </div>
        )
    }
}