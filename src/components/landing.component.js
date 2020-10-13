import React, { Component } from 'react'
import './landing.css'
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

export default class Landing extends Component {
    
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
                                studying computer science and economics. My technical interests include distributed systems, serverless architecture,
                                and high performance low latency financial systems. Outside of technology and academics, I'm passionate 
                                about film, television, and reading. View my favorite films on my <a href="https://letterboxd.com/bbottoml/">Letterboxd account</a>!
                            </p>
                            <div className='text-center' style={{fontSize: "20px"}}>
                                <a href="mailto:bottomlee@purdue.edu"><i class="fas fa-envelope"></i></a> &nbsp;
                                <a href="https://github.com/BBottoml"><i class="fab fa-github"></i></a> &nbsp;
                            </div>
                        </div>
                    </div>
                </StyleRoot>
            </div>
        )
    }
}