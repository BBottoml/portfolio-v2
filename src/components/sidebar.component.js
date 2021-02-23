import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default class Sidebar extends Component {


    render() {
        return(
            <Menu>
                <Link id="intro" className="menu-item" to="/">Intro</Link>
                <Link id="contact" className="menu-item" to="/experience">Experience</Link>
                <Link id="projects" className="menu-item" to="/projects">Projects</Link>
                <Link id="contact" className="menu-item" to="/skills">Skills</Link>
                <hr className='landing2' /> 
                <Link className="menu-item" to="/cbpro">cbpro++</Link>
            </Menu>
        )
    }
}