import React from 'react'
import Navigation from './Header'
import Footer from './footer'

var Aboutus=React.createClass({

render: function() {
	return (
		<div>
				<Navigation/>
				
				<div className="About-Discription">
				<p>Infosys is a global leader in technology services and consulting. We enable clients in more than 50 countries to create and execute strategies for their digital transformation.
				 From engineering to application development, knowledge management and business process management,
				  we help our clients find the right problems to solve, and to solve these effectively. Our team of 190,000+ innovators, across the globe, is differentiated by the imagination,
				   knowledge and experience, across industries and technologies, that we bring to every project we undertake.</p>
				</div>
				<div className="About-Container">
				<TeamMember UserImage="https://lh3.googleusercontent.com/wPhneXuP38Kz7Qp4tZQi75uIVPf19ZUOduZvO0TmK3yXLJECNU9KMlwLpZGTKVYxEUCXLs1YCQ=w1366-h768-rw-no"Name="Adi Vemuru" Role="CEO" Discription="Adi is a techno-business leader who believes in making this world a better place through unconventional means in leveraging technology and the human potential."/>
				<TeamMember UserImage="https://lh3.googleusercontent.com/mJZ7mZ66oGm1a9wouhAyg7USCP5NYvbJcb0iIaJM_8kInW0n25L_aTF6RYR_Krfdmz1_GgPjfg=w1366-h768-rw-no" Name="Surendra" Role="TECHNOLOGY EVANGELIST" Discription="Surendra is passionate about applying technology to customer success. His incessant pursuit for customer success has earned years of repeat business and great respect for our work."/>
				<TeamMember UserImage="https://media.licdn.com/media/p/6/005/0b0/237/39f0b49.jpg" Name="Surender" Role="REACT-NATIVE EVANGELIST" Discription="Surnder is a React-Native maverick who eats, sleeps and breathes React-Native. One of the top React-Native blogger, he designs/builds React-Native solutions day in and day out."/>
				<TeamMember UserImage="https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/1089234-medium190.jpg" Name="Baji Thota" Role="REACTJS EVANGELIST" Discription="Baji Thota is a React-Native maverick who eats, sleeps and breathes React-Native. One of the top React-Native blogger, he designs/builds React-Native solutions day in and day out."/>
				</div>
				<Footer/>

		</div>
	);
}


});

var TeamMember=React.createClass({

render: function() {
	return (
		<div className="Member-Details">
			<div className="UserPic">

				<img src={this.props.UserImage}/>
				<h3>{this.props.Name}</h3>

			</div>
			<div className="UserDetails">
				<span>{this.props.Role}</span>
					<p>{this.props.Discription}</p>
			</div>

		</div>
	);
}

});

module.exports=Aboutus;