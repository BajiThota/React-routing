import React from 'react'
import Navigation from './Header'
import Footer from './footer'


var Contact=React.createClass({

ValidateForm:function () {


var name=document.getElementById('contactName').value;
var email=document.getElementById('contactEmail').value;
var company=document.getElementById('contactCompany').value;
var mesage=document.getElementById('mesage').innerHTML;


	if(name=="")
		{

			document.getElementById('contactName').style.border="1px solid red";

		}
		else
		{
			document.getElementById('contactName').style.border="1px solid transparent";
		}

	 if(email=="")
		{

			document.getElementById('contactEmail').style.border="1px solid red";

		}
		else
		{		
			document.getElementById('contactEmail').style.border="1px solid transparent";

		}
		if(company=="")
		{

			document.getElementById('contactCompany').style.border="1px solid red";

		}
		else
		{		
			document.getElementById('contactCompany').style.border="1px solid transparent";

		}
		if(mesage=="")
		{

			document.getElementById('mesage').style.border="1px solid red";


		}
		else
		{

			document.getElementById('mesage').style.border="1px solid transparent";
		}

		
},

render: function() {
	return (
		<div>
		<Navigation/>
			<div className="Contacts-Container">
				<div className="ContactMap">
				</div>
				<div Id="Id_ContactForm" className="ContactsCpntainerForm">

						<input type="text" id="contactName" placeholder="Name"/>
						
						<input type="email" id="contactEmail" placeholder="Email"/>

						
						<input type="company" id="contactCompany" placeholder="Company"/>

						
						<textarea placeholder="Message" id="mesage"/>

						<input type="button" id="submitQuery" onClick={this.ValidateForm} value="SEND"/>


				</div>

				<div></div>
			</div>
			<Footer/>
		</div>
	);
}

});

module.exports=Contact;