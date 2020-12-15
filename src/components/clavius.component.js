import React, { Component } from 'react'
import { fadeIn, fadeInUp, fadeInDown } from 'react-animations';
import './landing.css'


export default class Clavius extends Component {
    render() {
        return(
            <div className='text-center' style={{paddingTop: "5%"}}>
                <h1 style={{fontWeight: "150", fontSize: "40px"}}>Clavius: Crypto Market Making Engine</h1>
            </div>
        )
    }
}