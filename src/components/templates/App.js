import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../router'

import './App.scss';

export class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Routes class="routes"/>
        </div>
      </BrowserRouter>
    )
  }
}
