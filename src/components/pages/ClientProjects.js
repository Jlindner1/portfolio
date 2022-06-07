import React from 'react';
import SCC_portrait_logo from "../../assets/SCC_portrait_logo.png";

const ClientProjects = () => {
	return (
		<div className="content">
			<h3>The Sacred Cow Company</h3>
			<div className="card card-col">
				<div className="img-container">
					<img
						className="scc"
						src={SCC_portrait_logo}
						alt="Sacred Cow Company logo"
					/>
				</div>
				<div>
					<p>
						I worked with a team of my fellow students to develop a Minimum
						Viable Product for The Sacred Cow Company, a business focusing
						on coaching and developing leadership skills and prepping people
						for management or leadership positions. The web app is used to
						keep track of clients, coaches and their appointments and
						progress in the curriculum. This application was developed with
						SCRUM methodology, completing tasks and demonstrating progress
						to the client in two week sprints.
					</p>
					<p>
						As far as the technological architecture of the application, it
						utilizes docker containerization to have seperate PostgreSQL
						Database layer, DOT NET Core REST API back-end and a React.js
						front-end. I worked primarliy on the back-end and database
						components of the project, implmenting a robust SQL database
						structure and Controller/Service/Repository back-end utilizing
						microservices for the core funcitonality of the project as well
						as creating the controller API routes for the front end to
						interact with to get the data being handled. This included
						retrieving and manipulating Database data, creating
						validation/handling classes, processing the incoming/outgoing
						data through a service layer and routing it to its necessary
						destinations. In adition to this though, I also worked a
						significant amount on the React.js front-end making UX and data
						handling changes to ensure things were presented well and the
						information from the back-end/DB was handled properly and
						efficiently and provided an excellent user experience.
					</p>
					<p>
						Although I would love to have a interactive example of how the
						application functions, the privacy of the Client and their users
						do not allow me to have current access to the software now that
						it has been handed off to them for use.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ClientProjects;