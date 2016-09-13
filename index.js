import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import Aboutus from './modules/AboutUs'
import Contact from './modules/Contact'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/home" component={Home}/>
    <Route path="/aboutus" component={Aboutus}/>
    <Route path="/contact" component={Contact}/>
  </Router>
), document.getElementById('app'))

