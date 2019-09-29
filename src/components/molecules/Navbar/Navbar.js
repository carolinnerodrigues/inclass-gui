import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.scss'
import {Button} from '../../atoms/Button/Button'

import AuthService from '../../../services/auth'

export class NavbarComponent extends Component {
  
  handleLogout (){
    AuthService.logout();
  }

  render() {
    return (
      <div id="Navabar">
        <nav class="navbar navbar-dark"> 
        
        </nav> 
      </div>
    )
  }
}