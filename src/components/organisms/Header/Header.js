import React, { Component } from 'react'
import { NavbarComponent } from '../../molecules/Navbar/Navbar'

export class Header extends Component {

  render() {
    if(window.location.pathname === '/Login' || window.location.pathname === '/login') return null;

    return (
      <NavbarComponent />
    )
  }
}