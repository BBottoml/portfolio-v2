import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {PageView, initGA} from './Tracking/index';
import ReactGA from "react-ga";
import './landing.css';

const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

export default class Landing extends Component {

    componentDidMount() {
        initGA('UA-158286562-1');
        PageView();
    }
    
    render() {
        return(
            <div className="moduleIntro">
                <StyleRoot>
                    <div style={styles.fadeIn}>
                        <div className='text-center' style={{paddingTop: "15%"}}>
                            <h1 style={{fontWeight: "150", fontSize: "60px"}}>Bradley Bottomlee</h1>
                            <p style={{fontWeight: "150", fontSize: "20px"}}>CS student at Purdue University</p>
                            <div className='container'>
                                <hr className='landing' />
                            </div>
                        </div>

                        <div className='container'>
                            <p align="justify" style={{fontSize: "20px"}}>
                                Welcome to my portfolio! My name is Bradley, and I'm a third-year student at Purdue University 
                                studying computer science and economics. My technical interests include distributed systems, low-latency development, and serverless computing. 
                                Outside of technology and academics, I'm passionate about film, television, and reading. View my favorite films on my <ReactGA.OutboundLink eventLabel="Letterboxd - Account" to="https://letterboxd.com/bbottoml/">Letterboxd account</ReactGA.OutboundLink>!
                            </p>
                            <div className='text-center' style={{fontSize: "20px"}}>
                                <ReactGA.OutboundLink eventLabel="Mail" to="mailto:bottomlee@purdue.edu"><i class="fas fa-envelope"></i></ReactGA.OutboundLink> &nbsp;
                                <ReactGA.OutboundLink eventLabel="GitHub" to="https://github.com/BBottoml"><i class="fab fa-github"></i></ReactGA.OutboundLink> &nbsp;
                            </div>
                        </div>
                    </div>
                </StyleRoot>
            </div>
        )
    }
}