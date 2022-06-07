import React from 'react';
import construction from "../../assets/construction.png";

const EducationalProjects = () => {
	return (
		<div className="content">
			<a className href="#" target="_blank">
				<h3>Under Construction...</h3>
			</a>
			<div className="card">
				<div className="img-container">
					<img src={construction} alt="under construction image" />
				</div>
				<div>
					<p>This page is still being worked on, come back soon!</p>
				</div>
			</div>
		</div>
	);
};

export default EducationalProjects;