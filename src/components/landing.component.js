import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                            <p style={{fontWeight: "150", fontSize: "20px"}}>Computer Science student at Purdue University</p>
                            <div className='container'>
                                <hr className='landing' />
                            </div>
                        </div>

                        <div className='container'>
                            <p align="justify" style={{fontSize: "20px"}}>
                                Hello, and welcome to my portfolio! My name is Bradley, and I'm a second-year, 
                                computer science student at Purdue University. I'm passionate about developing super well-designed, 
                                equitable software that is accessible to everyone regardless of technological ability. To this end, 
                                I have sought to create <Link to="/projects">numerous projects</Link> to assist those in their respective pursuits. 
                                My specific interests include distributed systems, web application development, and machine learning. Aside
                                from software development, I'm also passionate about film, television, and reading. View my favorite films 
                                on my <a href="https://letterboxd.com/bbottoml/">Letterboxd account</a>!
                            </p>
                            <div className='text-center' style={{fontSize: "20px"}}>
                                <a href="mailto:bottomlee@purdue.edu"><i class="fas fa-envelope"></i></a> &nbsp;

                                <a href="https://twitter.com/bottomlee_b"><i class="fab fa-twitter"></i></a> &nbsp; 
                                <a href="https://github.com/BBottoml"><i class="fab fa-github"></i></a> &nbsp;
                                <a href="https://www.linkedin.com/in/bradleybottomlee/"><i class="fab fa-linkedin-in"></i></a> 
                            </div>
                        </div>
                    </div>
                </StyleRoot>
            </div>
        )
    }
}