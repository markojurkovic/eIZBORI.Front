import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo1.svg';

console.log(logo);

class NavMenu extends Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src={logo} width="250" height="170"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
        
                <div class="navbar-collapse collapse" id="navbarsExample01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default NavMenu;
