import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fadeIn, fadeInUp, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Row, Image, Col} from 'react-bootstrap'
// import images
import beatq from '../images/beatq.png'
import './landing.css'
// http://seanhalpin.io/work
const styles = {
    fadeIn: {
      animation: 'x 1s',
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
                        {/* BeatQ Project */}
                        <div style={styles.fadeInUp}>
                            <div style={{paddingLeft: "5%", paddingRight: "5%"}}>
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
                                        with teammates. 
                                    </p>
                                </Col>
                            </Row>
                            </div>
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
                                        with teammates. 
                                    </p>
                                </Col>
                            </Row>


                            </div>
                </StyleRoot>
            </div>
        )
    }
}