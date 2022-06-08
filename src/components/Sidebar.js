import React from "react";
import "../styles/Sidebar.css";
import me from "../assets/me.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {ROUTE} from "../utils/Routes";

const Sidebar = ({changeContent}) => {

	return (
		<section className="sidebar">
			<div className="profile-img">
				<div
					onClick={() => changeContent(ROUTE.home)}
					title="Home"
					className="home-link"
				>
					<img src={me} alt="Josiah Lindner"/>
				</div>
			</div>
			<h1>Hello!</h1>
			<h2>Josiah is:</h2>
			<p>Developing Web Applications in</p>
			<p className="location-p">Edmonton AB, Canada</p>
			<div className="social">
				<div
					className="social-link"
					href="https://www.linkedin.com/in/josiah-lindner-28b872b6"
					target="_blank"
				>
					<FontAwesomeIcon icon={faLinkedin} className="icon" />
					<h4>linkedin</h4>
				</div>
				<div
					className="social-link"
					href="https://github.com/Jlindner1"
					target="_blank"
				>
					<FontAwesomeIcon icon={faGithubSquare} className="icon" />
					<h4>GitHub</h4>
				</div>
			</div>
		</section>
	);
}

export default Sidebar;
