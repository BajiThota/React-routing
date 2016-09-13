import React from 'react'
import render from 'react-dom'
import ReactDom  from 'react-dom'
import Navigation from './Header';
import Home from './Home';


export default React.createClass({
  render() {
    return (<div>
		<Home/>
    </div>);
  }
})
