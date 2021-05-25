import React from 'react';
import '../styles/Home.css';
import 'react-dropdown/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faUser, faFile } from '@fortawesome/free-regular-svg-icons';
import { faPhp, faReact, faHtml5, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailJs from 'emailjs-com';
import me from '../img/me.jpg';
import storefront from '../img/storefront.png';
import responsive_page from '../img/responsive_page.png';
import construction from "../img/construction.png";
import pokemon from "../img/pokemon.png";
import messagesystem from "../img/messagesystem.JPG";
emailJs.init("user_hxfO5whlzoN4hbuBtpvvL");




class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dropped : false,
            name: '',
            email: '',
            message: '',
            errors: false,
            errorMsg: [],
            success: ""
        };
        this.page = props.page; 
        this.changeContent = this.props.changeContent;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
//<Dropdown className="dropdown" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
    toggleDropdown = (e) => {
        //console.log(e.target.parentElement.parentElement.lastChild);
        let dc = e.target.parentElement.parentElement.lastChild;
        
        if(dc.classList.contains("hidden")){
            dc.classList.remove("hidden");
            dc.classList.add("visible");
            setTimeout(function () {
                dc.classList.remove('visually-hidden');
            }, 0);
        }
        else {
            dc.classList.remove('visible'); 
            dc.classList.add('visually-hidden');  
            dc.addEventListener('transitionend', function(e) {
                dc.classList.add('hidden');
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }
    }

    removeErrorMsg(errorMsg) {
        setTimeout(function(){ errorMsg.classList.remove("error-display"); errorMsg.classList.add("fade"); }, 2000);
        // this.setState({ success: "", errors: false, errorMsg: [] });
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    
        onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    
        onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    

    handleSubmit (event) {
        this.setState({ errors: false, errorMsg: [], success: "" });
        const errorList = [];
        let error = document.getElementById("error-msg");
        let success = document.getElementById("success-msg");
        const templateId = 'template_3hz2kmk';
    
        if (this.state.name === "") {     
            errorList.push("Please include a name to let me know who sent the email!");       
            // this.setState({ error: true, errorMsg: "Please include a name to let me know who sent the email!" });
        }
        if (this.state.email === "") {
            errorList.push("Please include an email so I can get back to you!");
            // this.setState({ error: true, errorMsg: "Please include an email so I can get back to you!" });
        }
        if (this.state.message === "") {
            errorList.push("Please include a message about why you're contacting me!");
            // this.setState({ error: true, errorMsg: "Please include a message about why you're contacting me!" });
        }
        if(errorList.length === 0) {
            this.setState({ success: "Email Sent!" });
            this.sendFeedback(templateId, {message: this.state.message, name: this.state.name, email: this.state.email})  
            success.classList.remove("fade");
            success.classList.add("error-display");        
            this.removeErrorMsg(success);          
        }
        else {
            this.setState({ errors: true, errorMsg: errorList });
            error.classList.remove("fade");
            error.classList.add("error-display");        
            this.removeErrorMsg(error);
            console.log(this.state.errorMsg);
        }


        console.log(error.classList);
    }

    sendFeedback (templateId, variables) {
        emailJs.send(
        'service_276cc9d', templateId,
        variables
        ).then(res => {
        console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render () {    

        let content;
        const page = this.props.page;
        const errors = this.state.errorMsg;

        if(page === "home") {
            content = 
                <div className="content">
                    <h3>Welcome!</h3>
                    <p>
                        I'm Josiah, a software developer specializing in web-based apps and projects, in both Front-end and Back-end capacities. Creating and learning new things along the way is my passion, and solving problems and finding new ones is my hobby! 
                    </p>
                    <p>
                        Feel free to look around my site for more info and examples on what I have done/am doing, and if you have any questions or would like to inquire about my services, use the contact form to reach out!
                    </p>
                    <p>
                        This page is meant to display my current abilities in terms of front-end design, and will evolve as my skills develop further and I increase the breadth of my portfolio. I have designed and implemented this React application from the ground up myself using React and CSS, and I hope this page gives you a good sample of my talents and insight into my skillsets and journey in web development. 
                    </p>
                </div>;
        }
        else if (page === "php-projects") {
            content = 
                <div className="content">
                    <div className="card">
                        <div className="img-container">
                            <img src={messagesystem} alt="Messenger App Thumbnail" />
                        </div>
                        <div>
                            <a className href="https://cms-messages.herokuapp.com" target="_blank"><h3>Messenger Appplication</h3></a>
                            <p>
                                An application built with PHP and a codeigniter framework, utilizing IonAuth user management and an interactive database to allow users to sign up/login and send messages with each other.
                            </p>
                        </div>
                    </div>
                </div>
        }
        else if (page === "static") {
            content = 
                <div className="content cards">
                    <div className="card">
                        <div className="img-container">
                            <img src={responsive_page} alt="responsive website image" />
                        </div>
                        <div>
                            <a className href="https://jlindner1.github.io/responsive-design/" target="_blank"><h3>Responsive Static Web Page</h3></a>
                            <p>
                                A sample showing techniques and implementation of responsive web design principles. This spage is designed utilizing a mobile-first methodology to enure that it is convenient and easy to use for a majority of the web-using population who is experienceing the internet through a smartphone. 
                            </p>
                            <p>
                                For this page, I was given a Photoshop file with the design, and implmented it in HTML and CSS from scratch.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-container">
                            <img src={storefront} alt="storefront website image" />
                        </div>
                        <div>
                            <a className href="https://jlindner1.github.io/storefront-sample/" target="_blank"><h3>Storefront Static Web Page</h3></a>
                            <p>
                                A sample webpage showcasing a possible storefront design utilizing dropdowns, and shop item cards. This is not a responsive page, and showcases utilization of CSS design abilities rather than a funcitonal page.
                            </p>
                            <p>
                                For this page, I was given a Photoshop file with the design, and implmented it in HTML and CSS from scratch.
                            </p>
                        </div>
                    </div>
                </div>;
        }
        else if (page === "react") {
            content = 
                <div className="content">
                    <div className="card">
                        <div className="img-container">
                            <img src={pokemon} alt="pokemon API page image" />
                        </div>
                        <div>
                            <a className href="https://jlindner1.github.io/pokedex/" target="_blank"><h3>Pokédex Front-end</h3></a>
                            <p>
                                A react application interacting with data from the PokéAPI to create a simple Pokédex.
                                this project started from a demonstration of how to work with the API, but all the internal logic is mine, and the styling is the only leftover from the demo. These stylings will be replaced and additional functionality will be added as I have time to evolve the project.
                            </p>
                        </div>
                    </div>
                </div>;
        }
        else if (page === "education") {
            content = 
                <div className="content">
                    <div className="card">
                        <div className="img-container">
                            <img src={construction} alt="under construction image" />
                        </div>
                        <div>
                            <a className href="#" target="_blank"><h3>Under Construction...</h3></a>
                            <p>
                                This page is still being worked on, come back soon!
                            </p>
                        </div>
                    </div>
                </div>;
        }
        else if (page === "personal") {
            content = 
                <div className="content">
                    <div className="card">
                        <div className="img-container">
                            <img src={construction} alt="under construction image" />
                        </div>
                        <div>
                            <a className href="#" target="_blank"><h3>Under Construction...</h3></a>
                            <p>
                                This page is still being worked on, come back soon!
                            </p>
                        </div>
                    </div>
                </div>;
        }
        else if (page === "client") {
            content = 
                <div className="content">
                    <div className="card">
                        <div className="img-container">
                            <img src={construction} alt="under construction image" />
                        </div>
                        <div>
                            <a className href="#" target="_blank"><h3>Under Construction...</h3></a>
                            <p>
                                This page is still being worked on, come back soon!
                            </p>
                        </div>
                    </div>
                </div>;
        }
        else if (page === "bio") {
            content = 
                <div className="content">
                    <div className="card">
                        <div className="img-container">
                            <img src={me} alt="image of author" />
                        </div>
                        <div>
                            <h3>About Me</h3>
                            <p>
                                From Edmonton Alberta, Canada - I am a Graduate from NAIT's Computer Software Development program, I am a passionate developer always looking for the next oppurtunity to further develop my abilities.
                            </p>
                            <p>
                                If I'm not working on my next project, I can often be found drawing, painting, learning a new piano piece or trying my hand at developing little video-games.
                            </p>
                            <p>
                                I have a great enthusiasm for taking things apart and finding out how and why they work - which is part of the reason I fell into programming, as there is always a new level to which you can increase your understanding as to how much of our modern world functions - and in turn how we as people interact with the world around us. 
                            </p>
                        </div>
                    </div>
                </div>;
        }
        else if (page === "resume") {
            content = 
                <div className="content">
                    <div className="card">
                        <div class="resume">
                            <h3>Resume/Skills</h3>
                            <p>
                                I have experience in an array of languages in frameworks, and always looking to expand my knowledge and abilities, and will keep this updated as my journey as a developer continues! 
                                
                            </p>
                            <p>My current skillsets are as follows:</p>
                            <h4>C#/Frameworks</h4>
                            <ul>
                                <li>Proficient in C# fundamentals and best practices</li>
                                <li>ASP.NET Framework - Designing and developing MVC web applications inlcuding reading/writing to various Database configurations</li>
                                <li>ASP.NET CORE - Creating sturdy REST APIs utilizing Controller/Service/Repository design methodology</li>
                            </ul>
                            <h4>JavaScript</h4>
                            <ul>
                                <li>Proficient in JavaScript fundamentals and best practices</li>
                                <li>Vanilla JS - Can utilize vanilla JS to add additional functionality and interactibility to static web pages</li>
                                <li>jQuery - Famliar with the jQuery library for handling additional features, integrations, and data handling</li>
                                <li>React - Experienced in the React framework/library for creating robust web applications with component and state management</li>
                                <li>Vue.js - Some experience with the Vue.js library</li>
                            </ul>
                            <h4>php</h4>
                            <ul>
                                <li>Proficient in fundamentals and best practices of php 7 and higher</li>
                                <li>php enabled web-pages - Skilled in handling user interactibility, database queries, and authentication</li>
                                <li>CodeIgniter - experience in ustilizing the CodeIgniter framework for developing robust MVC php projects</li>
                                <li>Wordpress/Joomla/Other CMS' - Some experience in utilizing/cutomizing CMS' templates and functionality</li>
                            </ul>
                            <h4>Database</h4>
                            <ul>
                                <li>SQL - Proficient in fundamentals for SQL Database data-normalization, creation, and management</li>
                                <li>Microsoft Sequel Server - Experienced in DB management/utilization with this software</li>
                                <li>PostgreSQL - Experienced in DB management/utilization</li>
                                <li>MySQL/php MyAdmin - Experienced in DB management/utilization</li>
                                <li>NoSQL - Some experience in Firebase and MongoDB no sql databases</li>
                            </ul>
                            <h4>Other</h4>
                            <ul>
                                <li>CSS/SASS - Proficient in utilizing CSS/SASS to add beautiful, effective, and efficient styling to web projects</li>
                                <li>HTML - Proficient in creating markdowns and utilizing SEO best practices for web projects</li>
                                <li>Futter/Dart - Some experience in developing mobile applications with the Flutter framework</li>
                                <li>Java - Some experience in creating/managing Java projects</li>
                            </ul>
                        </div>
                    </div>
                </div>;
        }
        else if (page === "contact") {
            content = 
                <div className="content">
                    <div id="error-msg" className="error-msg fade">
                        {(errors.length > 0) ? errors.map(e => (<h4>{e}</h4>)) : "didnt work"}
                    </div>
                    <div id="success-msg" className="success-msg hidden fade ">{this.state.success}</div>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="contact-info">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                            </div>                            
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                        </div>
                        <input type="button" value="Submit" className="btn btn-submit" onClick={this.handleSubmit} />
                    </form>
                </div>;
        }


        return (
            <div className="home">
                <header className="banner">  
                    <h1>Full Stack Development</h1>
                </header>
                <section>
                <div className="main-content">
                    <div className="column">
                        <div className="dropdown">
                            <a onClick={((e) => this.toggleDropdown(e))}><div className="dropdown-button">Live Projects</div></a>
                            {/* <FontAwesomeIcon icon={ faPhp } className="background-icon"/> */}
                            <ul id="dropdown-content" className="dropdown-content visually-hidden hidden">
                                <li><div onClick={(() => this.changeContent("php-projects"))} className="dropdown-item" >
                                    <h3>PHP/MySQL Apps</h3>
                                    <FontAwesomeIcon icon={ faPhp } className="icon" />
                                </div></li>
                                <li><div onClick={(() => this.changeContent("static"))} className="dropdown-item" >
                                    <h3>Static Web Pages</h3>
                                    <FontAwesomeIcon icon={ faHtml5 } className="icon" />
                                </div></li>
                                <li><div onClick={(() => this.changeContent("react"))} className="dropdown-item" >
                                    <h3>React/API Front-ends</h3>
                                    <FontAwesomeIcon icon={ faReact } className="icon" />
                                </div></li>
                            </ul>
                        </div>                        
                    </div>
                    <div className="column">
                        <div className="dropdown">
                            <a onClick={((e) => this.toggleDropdown(e))}><div className="dropdown-button">Github/Other</div></a>
                            {/* <FontAwesomeIcon icon={ faPhp } className="background-icon"/> */}
                            <ul id="dropdown-content" className="dropdown-content visually-hidden hidden">
                                <li><div onClick={(() => this.changeContent("education"))} className="dropdown-item" >
                                    <h3>Educational Projects</h3>
                                    <FontAwesomeIcon icon={ faGraduationCap } className="icon" />
                                </div></li>
                                <li><div onClick={(() => this.changeContent("personal"))} className="dropdown-item" >
                                    <h3>Personal Projects</h3>
                                    <FontAwesomeIcon icon={ faGithub } className="icon" />
                                </div></li>
                                <li><div onClick={(() => this.changeContent("client"))} className="dropdown-item" >
                                    <h3>Client Projects</h3>
                                    <FontAwesomeIcon icon={ faUserTie } className="icon" />
                                </div></li>
                            </ul>
                        </div>                        
                    </div>
                    <div className="column">
                        <div className="dropdown">
                            <a onClick={((e) => this.toggleDropdown(e))}><div className="dropdown-button">About Me</div></a>
                            {/* <FontAwesomeIcon icon={ faPhp } className="background-icon"/> */}
                            <ul id="dropdown-content" className="dropdown-content visually-hidden hidden">
                                <li><div onClick={(() => this.changeContent("bio"))} className="dropdown-item" >
                                    <h3>My Bio</h3>
                                    <FontAwesomeIcon icon={ faUser } className="icon" />
                                </div></li>
                                <li><div onClick={(() => this.changeContent("resume"))} className="dropdown-item" >
                                    <h3>Resume/Abilities</h3>
                                    <FontAwesomeIcon icon={ faFile } className="icon" />
                                </div></li>
                                <li><div onClick={(() => this.changeContent("contact"))} className="dropdown-item" >
                                    <h3>Contact</h3>
                                    <FontAwesomeIcon icon={ faEnvelope } className="icon" />
                                </div></li>
                            </ul>
                        </div>                        
                    </div>

                </div>
                {content}
                </section> 
                <footer className="main-footer">
                    <div>
                        <h5>&#169;2021 - Josiah Lindner </h5>
                    </div>
                </footer>               
            </div>
        );
    }
}

export default Home;