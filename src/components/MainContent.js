import react from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap, faUserTie} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faUser,
  faFile,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPhp,
  faReact,
  faHtml5,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const MainContent = ({content, toggleDropdown, setContent}) => {
  return (
    <section className="main-content">
			<div className="row dropdown-buttons">
				<div className="column">
					<div className="dropdown">
						<a onClick={((e) => toggleDropdown(e))}><div className="dropdown-button">Live Projects</div></a>
						{/* <FontAwesomeIcon icon={ faPhp } className="background-icon"/> */}
						<ul id="dropdown-content" className="dropdown-content visually-hidden hidden">
							<li>
								<div onClick={(() => setContent("php-projects"))} className="dropdown-item" >
									<h3>PHP/MySQL Apps</h3>
									<FontAwesomeIcon icon={ faPhp } className="icon" />
								</div>
							</li>
							<li>
								<div onClick={(() => setContent("static"))} className="dropdown-item" >
									<h3>Static Web Pages</h3>
									<FontAwesomeIcon icon={ faHtml5 } className="icon" />
								</div>
							</li>
							<li><div onClick={(() => setContent("react"))} className="dropdown-item" >
									<h3>React/API Front-ends</h3>
									<FontAwesomeIcon icon={ faReact } className="icon" />
							</div></li>
						</ul>
					</div>
        </div>
        <div className="column">
					<div className="dropdown">
						<a onClick={((e) => toggleDropdown(e))}><div className="dropdown-button">Github/Other</div></a>
						{/* <FontAwesomeIcon icon={ faPhp } className="background-icon"/> */}
						<ul id="dropdown-content" className="dropdown-content visually-hidden hidden">
							<li>
								<div onClick={(() => setContent("education"))} className="dropdown-item" >
									<h3>Educational Projects</h3>
									<FontAwesomeIcon icon={ faGraduationCap } className="icon" />
								</div>
							</li>
							<li>
								<div onClick={(() => setContent("personal"))} className="dropdown-item" >
									<h3>Personal Projects</h3>
									<FontAwesomeIcon icon={ faGithub } className="icon" />
								</div>
							</li>
							<li>
								<div onClick={(() => setContent("client"))} className="dropdown-item" >
									<h3>Client Projects</h3>
									<FontAwesomeIcon icon={ faUserTie } className="icon" />
								</div>
							</li>
						</ul>
					</div>                        
        </div>
        <div className="column">
					<div className="dropdown">
						<a onClick={((e) => toggleDropdown(e))}><div className="dropdown-button">About Me</div></a>
						{/* <FontAwesomeIcon icon={ faPhp } className="background-icon"/> */}
						<ul id="dropdown-content" className="dropdown-content visually-hidden hidden">
							<li>
								<div onClick={(() => setContent("bio"))} className="dropdown-item" >
									<h3>My Bio</h3>
									<FontAwesomeIcon icon={ faUser } className="icon" />
								</div>
							</li>
							<li>
								<div onClick={(() => setContent("resume"))} className="dropdown-item" >
									<h3>Resume/Abilities</h3>
									<FontAwesomeIcon icon={ faFile } className="icon" />
								</div>
							</li>
							<li>
								<div onClick={(() => setContent("contact"))} className="dropdown-item" >
									<h3>Contact</h3>
									<FontAwesomeIcon icon={ faEnvelope } className="icon" />
								</div>
							</li>
						</ul>
					</div>                        
        </div>
			</div>
			{content}
    </section> 
  );
};

export default MainContent;
