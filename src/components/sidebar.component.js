import React, { Component } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default class Sidebar extends Component {
    showSettings (e) {
        e.preventDefault();
      }

    render() {
        return(
            <Menu>
                <Link id="about" className="menu-item" href="/">Intro</Link>
                <Link id="about" className="menu-item" href="/about">Projects</Link>
                <Link id="contact" className="menu-item" href="/contact">Experience</Link>
                <Link id="contact" className="menu-item" href="/contact">Contact</Link>
            </Menu>
        )
    }
}