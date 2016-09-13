import React from 'react'

var Navigation=React.createClass({


render: function() {
	return (
		<div className="Navigation">

			<div className="logo"/>
			<div className="logo2"/>

			<h1>Test Site</h1>
			<ul>
					
					<li><a href="/#/Home">Home</a></li>
					<li><a href="/#/aboutus">About</a></li>
					<li><a href="/#/contact">Contact</a></li>
			</ul>

		</div>
	);
}

})

module.exports =  Navigation;

