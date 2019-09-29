import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.scss'
import {Button} from "../../atoms/Button/Button"

import AuthService from '../../../services/auth'

export class NavbarComponent extends Component {
  
  handleLogout (){
    AuthService.logout();
  }

  render() {
    return (
      <div id="Navbar">
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h5 class="my-0 mr-md-auto font-weight-normal">InClass</h5>
          <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="#">Modelar</a>
            <a class="p-2 text-dark" href="#">Cadastrar Turmas</a>
            <a class="p-2 text-dark" href="#">Cadastrar Salas</a>
          </nav>
          <Button>Logout</Button>
        </div>
      </div>
    )
  }
}