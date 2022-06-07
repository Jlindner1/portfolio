import React from 'react';
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
import {ROUTE} from '../utils/Routes';
import DropDownList from './DropDownList';

const MainContent = ({content, toggleDropdown, setContent}) => {
  return (
    <section className="main-content">
			<div className="row dropdown-buttons">
				<div className="column">
					<DropDownList title={"Live Projects"}>
						<li>
							<div onClick={(() => setContent(ROUTE.php))} className="dropdown-item" >
								<h3>PHP/MySQL Apps</h3>
								<FontAwesomeIcon icon={ faPhp } className="icon" />
							</div>
						</li>
						<li>
							<div onClick={(() => setContent(ROUTE.staticPages))} className="dropdown-item" >
								<h3>Static Web Pages</h3>
								<FontAwesomeIcon icon={ faHtml5 } className="icon" />
							</div>
						</li>
						<li>
							<div onClick={(() => setContent(ROUTE.reactPages))} className="dropdown-item" >
								<h3>React/API Front-ends</h3>
								<FontAwesomeIcon icon={ faReact } className="icon" />
							</div>
						</li>
					</DropDownList>
        </div>
        <div className="column">
					<DropDownList title={"Github/Other"}>
						<li>
							<div onClick={(() => setContent(ROUTE.educational))} className="dropdown-item" >
								<h3>Educational Projects</h3>
								<FontAwesomeIcon icon={ faGraduationCap } className="icon" />
							</div>
						</li>
						<li>
							<div onClick={(() => setContent(ROUTE.personalProjects))} className="dropdown-item" >
								<h3>Personal Projects</h3>
								<FontAwesomeIcon icon={ faGithub } className="icon" />
							</div>
						</li>
						<li>
							<div onClick={(() => setContent(ROUTE.clientProjects))} className="dropdown-item" >
								<h3>Client Projects</h3>
								<FontAwesomeIcon icon={ faUserTie } className="icon" />
							</div>
						</li>
					</DropDownList>                     
        </div>
        <div className="column">
					<DropDownList title={"About Me"}>
						<li>
							<div onClick={(() => setContent(ROUTE.bio))} className="dropdown-item" >
								<h3>My Bio</h3>
								<FontAwesomeIcon icon={ faUser } className="icon" />
							</div>
						</li>
						<li>
							<div onClick={(() => setContent(ROUTE.resume))} className="dropdown-item" >
								<h3>Resume/Abilities</h3>
								<FontAwesomeIcon icon={ faFile } className="icon" />
							</div>
						</li>
						<li>
							<div onClick={(() => setContent(ROUTE.contact))} className="dropdown-item" >
								<h3>Contact</h3>
								<FontAwesomeIcon icon={ faEnvelope } className="icon" />
							</div>
						</li>
					</DropDownList>
        </div>
			</div>
			{content}
    </section> 
  );
};

export default MainContent;
