import React, { Component } from 'react'
import { fadeIn, fadeInUp, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Row, Image, Col} from 'react-bootstrap'
import './landing.css'

// import images
import beatq from '../images/beatq.png'
import shiftbot from '../images/shiftbot.png'
import lbox from '../images/lbox.png'

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

export default class Projects extends Component {

    render() {
        return(
            <div>
                <StyleRoot>
                        <div className='text-center' style={{paddingTop: "5%"}}>
                            <div style={styles.fadeInDown}>
                                <h1 style={{fontWeight: "150", fontSize: "60px"}}>Projects</h1>
                            </div>
                            <div className='container' style={styles.fadeIn}>
                                <hr className='landing' />
                            </div>
                        </div>

                        <div style={styles.fadeInUp}>
                            <div style={{paddingLeft: "5%", paddingRight: "5%", paddingBottom: "2%"}}>
                                <Row>
                                    <Col>
                                        <Image src={beatq} thumbnail style={{marginRight: "2%"}} />
                                    </Col>
                                    <Col>
                                        <h2 style={{fontWeight: "150", fontSize: "40px"}}>BeatQ - DemonHacks 2nd place winner</h2>
                                        <p align='justify' style={{fontWeight: "150", fontSize: "20px"}}>
                                            BeatQ is a web application that allows groups to seamlessly queue music by searching for their
                                            desired songs and adding it to the party queue. I contributed to this project as part of a four person 
                                            team at the DemonHacks hacakthon at DePaul University. The tech stack used included Flask, Python, 
                                            Bootstrap, HTML/CSS. I worked on the implementation of cookies, Flask routes, 
                                            overarching logic, front-end design such as the dashboard, and integration of Spotify API in coordination
                                            with teammates. <br />
                                            <a href="https://github.com/Go4Mo/BeatQ">GitHub</a> | <a href="https://beatqio.herokuapp.com/">Website</a>
                                        </p>
                                    </Col>
                                </Row>
                            </div>

                            <div style={{paddingLeft: "5%", paddingRight: "5%", paddingBottom: "2%"}}>
                                <Row>
                                    <Col>
                                        <Image src={shiftbot} thumbnail style={{marginRight: "2%"}} />
                                    </Col>
                                    <Col>
                                        <h2 style={{fontWeight: "150", fontSize: "40px"}}>ShiftBot</h2>
                                        <p align='justify' style={{fontWeight: "150", fontSize: "20px"}}>
                                            ShiftBot was a SaaS service with users in 9 states that allowed Prime Now employees to sign up
                                            for their desired shifts automatically. Each week, users would receive a form of all
                                            the possible shifts in a week. They would select the ones they wanted, and I would pull the 
                                            data and run a Python script to transform the data. From there, bot instances would launch each 
                                            day and would constantly refresh until shifts were posted, at which point they would select the desired
                                            ones. The core program was built in Python utilizing the Selenium library and shell scripting. <br /> 
                                            <a href="https://shiftbot.org">Website</a>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                            
                            <div style={{paddingLeft: "5%", paddingRight: "5%", paddingBottom: "2%"}}>
                                <Row>
                                    <Col>
                                        <Image src={lbox} thumbnail style={{marginRight: "2%"}} />
                                    </Col>
                                    <Col>
                                        <h2 style={{fontWeight: "150", fontSize: "40px"}}>Letterboxd Friend Ranker</h2>
                                        <p align='justify' style={{fontWeight: "150", fontSize: "20px"}}>
                                            Letterboxd Friend Ranker is a program for comparing film tastes amongst friends. Letterboxd allows
                                            users to rank films and follow their friends to stay up-to-date. This program scrapes Letterboxd 
                                            rating data for each friend of a given user using the Beautiful Soup library and transforms the data
                                            using the Pandas library to compute a commonality score. Lastly, the program generates a 
                                            report using a PDF generator library illustrating the commonalities amongst friends. 
                                            The technologies/languages used include Python, Beautiful Soup, Pandas, and PyFPD. <br />
                                            <a href="https://github.com/BBottoml/Letterboxd-friend-ranker">GitHub</a>
                                        </p>
                                    </Col>
                                </Row>
                            </div>

                            </div>
                </StyleRoot>
            </div>
        )
    }
}