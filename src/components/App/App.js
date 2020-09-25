import React, { Component } from 'react'
import Home from '../../pages/Home/Home'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Hometemplate from '../../templates/hometemplate/Hometemplate';
import Dance from '../../pages/Dance/Dance';
import Travel from '../../pages/Travel/Travel';
import Blog from '../../pages/Blog/Blog';
import About from '../../pages/About/About';
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Hometemplate path='/' exact component={Home} />
          <Hometemplate path='/travel' exact component={Travel} />
          <Hometemplate path='/dance' exact component={Dance} />
          <Hometemplate path='/blog' exact component={Blog} />
          <Hometemplate path='/about' exact component={About} />
        </BrowserRouter>
      </>
    )
  }
}
