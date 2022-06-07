import React from 'react';
import messagesystem from "../../assets/messagesystem.JPG";

const PhpProjects = () => {
	return (
		<div className="content">
			<a
				className
				href="https://cms-messages.herokuapp.com"
				target="_blank"
				rel="noreferrer"
			>
				<h3>Messenger Appplication</h3>
			</a>
			<a href="https://cms-messages.herokuapp.com" target="_blank">
				<div className="card">
					<div className="img-container">
						<img src={messagesystem} alt="Messenger App Thumbnail" />
					</div>
					<div>
						<p>
							An application built with PHP and a codeigniter framework,
							utilizing IonAuth user management and an interactive database
							to allow users to sign up/login and send messages to each
							other. This application is hosted through heroku, and utilizes
							a cloud hosted MySQL database.
						</p>
						<p>
							This project utilizes simple modified bootstrap styling, and
							will have nicer styling and more features as I have time to
							add to them.
						</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default PhpProjects;