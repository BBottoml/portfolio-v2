import React, { Component } from 'react'
import { fadeIn, fadeInUp, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
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

export default class Experience extends Component {

    render() {
        return(
            <div>
                <StyleRoot>
                        <div className='text-center' style={{paddingTop: "5%"}}>
                            <div style={styles.fadeInDown}>
                                <h1 style={{fontWeight: "150", fontSize: "60px"}}>Experience</h1>
                            </div>
                            <div className='container' style={styles.fadeIn}>
                                <hr className='landing' />
                            </div>
                        </div>
                        
                        <div style={styles.fadeInUp}>
                            <div className='container'>
                            <h2 style={{fontWeight: "150", fontSize: "40px"}}>CME Group</h2>
                            <h3 style={{fontWeight: "150", fontSize: "30px"}}>Incoming Software Engineering Intern</h3>
                            <hr className='landing2'/>
                            <h2 style={{fontWeight: "150", fontSize: "40px"}}>Illinois Lending Corporation</h2>
                            <h3 style={{fontWeight: "150", fontSize: "30px"}}>Software Engineer (Part-time)</h3>
                            <p align='justify'>
                                • Use React.js to develop custom web application solutions for numerous divisions of the company such as management and underwriting<br /> 
                                • Interface with and integrate custom RESTful APIs designed with C# and ASP.NET framework to dynamically generate insightful content<br /> 
                                • Manage hosting resources using Microsoft Azure and practice continuous integration/development techniques
                            </p>
                            <hr className='landing2'/>
                            <h2 style={{fontWeight: "150", fontSize: "40px"}}>Purdue University Dept. of Computer Science</h2>
                            <h3 style={{fontWeight: "150", fontSize: "30px"}}>Teaching Assistant</h3>
                            <p align='justify'>
                                • Lead lab sections and instruct first year computer science students in Java programming topics and problem solving<br />
                                • Grade assignments, development coursework, and ensure proper communication with all involved parties
                            </p>
                            </div>
                        
                        </div>
                        


                </StyleRoot>
            </div>
        )
    }
}