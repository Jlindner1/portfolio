import React from 'react';

const Resume = () => {
	return (
		<div className="content">
			<h3>Resume/Skills</h3>
			<div className="card">
				<div class="resume">
					<p>
						I have experience in an array[] of languages and frameworks, and
						I am always looking to expand my knowledge and abilities. I will
						also keep this updated as my journey as a developer continues
					</p>
					<p>My current skillsets are as follows:</p>

					<div className="skill-card">
						<h4>C#/Frameworks</h4>
						<ul>
							<li>Proficient in C# fundamentals and best practices</li>
							<li>
								ASP.NET Framework - Designing and developing MVC web
								applications inlcuding reading/writing to various Database
								configurations
							</li>
							<li>
								ASP.NET CORE - Creating sturdy REST APIs utilizing
								Controller/Service/Repository design methodology
							</li>
						</ul>
					</div>

					<div className="skill-card">
						<h4>JavaScript</h4>
						<ul>
							<li>
								Proficient in JavaScript fundamentals and best practices
							</li>
							<li>
								Vanilla JS - Can utilize vanilla JS to add additional
								functionality and interactibility to static web pages
							</li>
							<li>
								jQuery/jQuery Mobile - Famliar with the jQuery library for
								handling additional features, integrations, and data
								handling
							</li>
							<li>
								React - Experienced in the React framework/library for
								creating robust web applications with component and state
								management
							</li>
							<li>Vue.js - Some experience with the Vue.js library</li>
						</ul>
					</div>

					<div className="skill-card">
						<h4>php</h4>
						<ul>
							<li>
								Proficient in fundamentals and best practices of php 7 and
								higher
							</li>
							<li>
								php enabled web-pages - Skilled in handling user
								interactibility, database queries, and authentication
							</li>
							<li>
								CodeIgniter - experience in ustilizing the CodeIgniter
								framework for developing robust MVC php projects
							</li>
							<li>
								Wordpress/Joomla/Other CMS' - Some experience in
								utilizing/cutomizing CMS' templates and functionality
							</li>
						</ul>
					</div>

					<div className="skill-card">
						<h4>Database</h4>
						<ul>
							<li>
								SQL - Proficient in fundamentals for SQL Database
								data-normalization, creation, and management
							</li>
							<li>
								Microsoft Sequel Server - Experienced in DB
								management/utilization with this software
							</li>
							<li>PostgreSQL - Experienced in DB management/utilization</li>
							<li>
								MySQL/php MyAdmin - Experienced in DB management/utilization
							</li>
							<li>
								NoSQL - Some experience in Firebase and MongoDB no sql
								databases
							</li>
						</ul>
					</div>

					<div className="skill-card">
						<h4>Other</h4>
						<ul>
							<li>
								CSS/SASS - Proficient in utilizing CSS/SASS to add
								beautiful, effective, and efficient styling to web projects
							</li>
							<li>
								HTML - Proficient in creating markdowns and utilizing SEO
								best practices for web projects
							</li>
							<li>
								Futter/Dart - Some experience in developing mobile
								applications with the Flutter framework
							</li>
							<li>
								Java - Some experience in creating/managing Java projects
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;