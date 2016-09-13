import React from 'react'
import Navigation from './Header'
import Contact from './Contact'
import Footer from './footer'

var Home= React.createClass({

render: function() {
	return (
		
		<div>
			<Navigation/>
			<div className="Content-Container">
			<h1>Who We Are</h1>
			<p>
			Who We AreWe are Obsessed with our love for technology and the infinite possibilities it can create for making this world a better place. 
			Our clients find us at our best when we are challenged with their toughest of the problems and we love chasing the problems. It thrills us and motivates us to deliver more.
			Our global delivery model has earned the trust and reputation of being a partner of choice.
			We have a strong heritage built on great people who put customers first and deliver exceptional results with no surprises -every time. We partner with you to understand the interconnection of user experience, business goals, and information technology.
			It's the optimal fusing of these three drivers that delivers</p>
			<h1>How We Are</h1>
			<p>We work with local people affected by conflict to improve their safety and sense of security, and conduct wider research and analysis. We use this evidence and learning to improve local, national and international policies and practices that can help build lasting peace. 
			Our priority is people – we believe that everyone should be able to lead peaceful, fulfilling lives, free from insecurity and violent conflict.</p>
			</div>
			<Footer/>
		</div>
	);
}

});
 module.exports=Home;