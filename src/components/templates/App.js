import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../router'
import { Header } from '../organisms/Header/Header'

import './App.scss';

export class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header />
          <Routes className="routes"/>
        </div>
      </BrowserRouter>
    )
  }
}
