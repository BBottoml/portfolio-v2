import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import { fadeIn, fadeInUp, fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {PageView, initGA} from './Tracking/index';
import ReactGA from "react-ga";
import cbproimg from '../images/cbpro.png';
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
        animation: 'x 1.25s', 
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
  }

export default class Cbpro extends Component {
    componentDidMount() {
        initGA('UA-158286562-1');
        PageView();
    }

    render() {
        return(
            <div>
                <StyleRoot>
                    <div className='text-center' style={{paddingTop: "5%"}}>
                        <div className='container'>
                            <div style={styles.fadeInDown}>
                                <h1 style={{fontWeight: "150", fontSize: "40px"}}>cbpro++</h1>
                                <h3 style={{fontWeight: "100", fontSize: "20px"}}>A Coinbase Pro API client library for C++</h3>
                                <ReactGA.OutboundLink eventLabel="cbpro" to="https://github.com/BBottoml/cbpro-cpp">GitHub</ReactGA.OutboundLink> &nbsp;
                            </div>
                            <div className='container' style={styles.fadeIn}>
                                <hr className='landing'/>
                            </div>
                            <div className='container' style={styles.fadeInUp}>
                                <Image src={cbproimg} thumbnail style={{width: "75%", height: "75%"}}/> <br /> < br />
                                <h4 style={{fontWeight: "200", fontSize: "20px"}} align='justify'>Summary</h4>
                                <p align='justify'><b>cbpro++</b> is my largest side project to date and has allowed me to expand my knowledge in a number of interest areas.
                                Some of these interest areas include modern C++ development, latency sensitive development, algorithmic trading, and exchange connectivity. 
                                The primary purpose of this library is to allow end users to easily connect to the Coinbase Pro exchange through their provided API. There already 
                                exist a number of client libraries in <ReactGA.OutboundLink eventLabel="languages" to="https://github.com/BBottoml/cbpro-cpp">other languages</ReactGA.OutboundLink> but this appears to be one of the
                                first implemented in C++.</p>
                                <hr className='landing2' /> 
                                <h4 style={{fontWeight: "200", fontSize: "20px"}} align='justify'>Overview</h4>
                                <p align='justify'>The Coinbase Pro API is very feature rich and allows users to do everything from retrieving a level 3 order book to managing their leverage. 
                                Coinbase Pro offers three primary connection methods namely HTTP, WebSocket, and FIX. This library currently supports a number of HTTP endpoints and development 
                                for WebSocket support will start soon. Additionally, there are very few dependencies necessary to build the library.</p>
                                <hr className='landing2' /> 
                                <h4 style={{fontWeight: "200", fontSize: "20px"}} align='justify'>Retrospective</h4>
                                <p align='justify'>The most challenging part of this project so far has been the design aspect (i.e., thinking about how the user should interact with the responses). Admittedly,
                                I have borrowed elements from other client libraries (the C# client library in particular) in the design process. What I settled on was a very object oriented approach
                                to managing the responses. For instance, when the user requests a list of all products, a vector of "product" objects is returned. Each product object contains 
                                numerous getter functions to retrieve information about the specific product (e.g., product id, quote currency, etc.). This approach certainly has its share of drawbacks, but I 
                                think it accomplishes the goal of abstraction.</p>
                                <hr className='landing2' /> 
                                <h4 style={{fontWeight: "200", fontSize: "20px"}} align='justify'>Looking Forward</h4>
                                <p align='justify'>My immediate goal for the library is 100% coverage of the HTTP endpoints. Beyond that, I would like to implement support for WebSocket connectivity. The completion
                                of these two components would put the library on par with the majority of other client libraries as almost none of them support FIX. Aside from functionality, I would like to engage 
                                with users and get their thoughts.</p>
                            </div>
                        </div>
                    </div>
                </StyleRoot>
            </div>
        )
    }
}