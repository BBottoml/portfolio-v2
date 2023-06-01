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
                            <p style={{fontWeight: "150", fontSize: "20px"}}>Modern C++ Software Engineer</p>
                            <div className='container'>
                                <hr className='landing' />
                            </div>
                        </div>

                        <div className='container'>
                            <p align="justify" style={{fontSize: "20px"}}>
                                Welcome to my portfolio! My name is Bradley and I'm a recent Purdue graduate currently seeking latency-driven, modern C++ roles. Despite this focus, I have a wide 
                                range of technical interests (e.g., distributed systems, low-latency development) and love exploring the intersection beteween tech and finance. My professional
                                experience has involved working closely with traders, strats, and developers in the fixed income space to develop performant, high-availability systems.
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