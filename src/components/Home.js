import React from 'react';
import '../styles/Home.css';
import 'react-dropdown/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faUser, faFile } from '@fortawesome/free-regular-svg-icons';
import { faPhp, faReact, faHtml5, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailJs from 'emailjs-com';
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
                    <p>
                        I'm Josiah, a software developer specializing in web-based apps and projects, in both Front-end and Back-end capacities. Creating and learning new things along the way is my passion, and solving problems and finding new ones is my hobby! 
                    </p>
                    <p>
                        Feel free to look around my site for more info and examples on what I have done/am doing, and if you have any questions or would like to inquire about my services, use the contact form to reach out!
                    </p>
                </div>;
        }
        else if (page === "php-projects") {
            content = 
                <div className="content">
                    <p>
                        Under Construction...
                    </p>
                </div>;
        }
        else if (page === "static") {
            content = 
                <div className="content">
                    <p>
                        Under Construction...
                    </p>
                </div>;
        }
        else if (page === "react") {
            content = 
                <div className="content">
                    <p>
                        Under Construction...
                    </p>
                </div>;
        }
        else if (page === "education") {
            content = 
                <div className="content">
                    <p>
                        Under Construction...
                    </p>
                </div>;
        }
        else if (page === "personal") {
            content = 
                <div className="content">
                    <p>
                        Under Construction...
                    </p>
                </div>;
        }
        else if (page === "client") {
            content = 
                <div className="content">
                    <p>
                        Under Construction...
                    </p>
                </div>;
        }
        else if (page === "bio") {
            content = 
                <div className="content">
                    <p>
                        Under Construction...
                    </p>
                </div>;
        }
        else if (page === "resume") {
            content = 
                <div className="content">
                    <p>
                        Under Construction...
                    </p>
                </div>;
        }
        else if (page === "contact") {
            content = 
                <div className="content">
                    <div id="error-msg" className="error-msg fade">
                        {(errors.length > 0) ? errors.map(e => (<h4>{e}</h4>)) : "didnt work"}
                    </div>
                    <div id="success-msg" className="success-msg fade">{this.state.success}</div>
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