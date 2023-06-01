import React, { Component } from 'react';
import { fadeIn, fadeInUp, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {PageView, initGA} from './Tracking/index';
import ReactGA from "react-ga";
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

export default class Experience extends Component {

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
                                <h1 style={{fontWeight: "150", fontSize: "60px"}}>Experience</h1>
                            </div>
                            <div className='container' style={styles.fadeIn}>
                                <hr className='landing' />
                            </div>
                        </div>
                        
                        <div style={styles.fadeInUp}>
                            <div className='container'>
                                <h2 style={{fontWeight: "150", fontSize: "40px"}}>Morgan Stanley — New York, NY</h2>
                                <h3 style={{fontWeight: "150", fontSize: "30px"}}>Technology Associate (August 2022 - May 2023)</h3>
                                <p align='justify'>
                                    • Core developer on fixed income pricing and risk team responsible for low-latency, real-time position and risk aggregation systems.<br /> 
                                    • Spreadheaded design for reconciliation between slow (&gt;100ms) and fast trade feeds enabling quicker swaps risk publishing.<br />
                                    • Led design and implementation for standalone latency sensitive position cache and risk service for MBS desk.<br />
                                    • Overhauled and redesigned in-memory history manager used to track trades and risk records throughout system.<br />                                                                  
                                    • Provided on-call support for systems owned by team and worked with global teams to swiftly resolve production issues.<br /> 
                                    • Skills used: C++, Java, Python, STL, Message-based architecture, Event-driven architecture<br /> 
                                </p>
                                <hr className='landing2'/>
                                <h2 style={{fontWeight: "150", fontSize: "40px"}}>Morgan Stanley — New York, NY</h2>
                                <h3 style={{fontWeight: "150", fontSize: "30px"}}>Summer/Fall/Spring Technology Analyst (June 2021 - May 2022)</h3>
                                <p align='justify'>
                                    • Core developer on fixed income pricing and risk team responsible for low-latency, real-time position and risk aggregation systems. <br /> 
                                    • Decreased periodic ~30ms latency bottleneck to &lt;1ms by removing need to look at all maintained records.<br />
                                    • Built suite of tools to interface with live instances of position aggregation system to rapidly diagnose and resolve production trade discrepancies.<br />
                                    • Reviewed pull requests, proposed and implemented design changes, and communicated with numerous teams to understand requirements.<br />
                                    • Skills used: C++, Python, STL, Message-based architecture, Event-driven architecture<br /> 
                                </p>
                                <hr className='landing2'/>
                                <h2 style={{fontWeight: "150", fontSize: "40px"}}>CME Group — Chicago, IL</h2>
                                <h3 style={{fontWeight: "150", fontSize: "30px"}}>Software Engineering Intern (May 2020 - August 2020)</h3>
                                <p align='justify'>
                                    • Worked on existing C++ risk engine used to hedge defaulted portfolios containing OTC and exchange-listed interest rate derivatives<br /> 
                                    • Developed AWS Lambda function allowing for 1000 concurrent risk engine calculation requests from an existing maximum of 23<br />
                                    • Modified Java Spring Boot web service layer to use new AWS infastructure and developed robust risk engine test suite using gtest<br />                                                                  
                                    • Made <ReactGA.OutboundLink eventLabel="ShiftBot" to="https://github.com/awslabs/aws-lambda-cpp/tree/master/examples/api-gateway">open source contribution</ReactGA.OutboundLink> 
                                    &nbsp; to AWS Lambda C++ Runtime Library demonstrating use of library, API Gateway, and AWS C++ SDK<br /> 
                                    • Skills used: C++, Java, Boost, STL, AWS (Lambda, API Gateway, EC2, S3), Jenkins, Terraform, gtest<br /> 
                                </p>
                                <hr className='landing2'/>
                                <h2 style={{fontWeight: "150", fontSize: "40px"}}>Illinois Lending Corporation — Des Plaines, IL</h2>
                                <h3 style={{fontWeight: "150", fontSize: "30px"}}>Software Engineer (Part-time) (January 2020 - May 2020)</h3>
                                <p align='justify'>
                                    • Used React.js and Node.js to develop lightweight web applications for numerous divisions of the company such as management and underwriting<br /> 
                                    • Integrated REST APIs designed with C# and .NET framework to dynamically generate insightful content<br /> 
                                    • Managed hosting resources using Microsoft Azure and practice continuous integration/development techniques
                                </p>
                                <hr className='landing2'/>
                                <h2 style={{fontWeight: "150", fontSize: "40px"}}>Purdue University Dept. of Computer Science — West Lafayette, IN</h2>
                                <h3 style={{fontWeight: "150", fontSize: "30px"}}>Teaching Assistant &amp; Course Developer (January 2019 - Present)</h3>
                                <p align='justify'>
                                    • Lead lab sections and provide instruction to first year computer science students in Java programming topics and problem solving<br />
                                    • Grade assignments, develop coursework, and ensure proper communication with all involved parties
                                </p>
                            </div>
                        
                        </div>
                        


                </StyleRoot>
            </div>
        )
    }
}