import React from 'react';
import '../styles/Home.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns, faGraduationCap, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faUser, faFile } from '@fortawesome/free-regular-svg-icons';
import { faPhp, faReact, faHtml5, faGithub } from '@fortawesome/free-brands-svg-icons';



class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dropped : false
        };
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

    render () {    
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
                                <li><div className="dropdown-item" >
                                    <h3>PHP/MySQL Apps</h3>
                                    <FontAwesomeIcon icon={ faPhp } className="icon" />
                                </div></li>
                                <li><div className="dropdown-item" >
                                    <h3>Static Web Pages</h3>
                                    <FontAwesomeIcon icon={ faHtml5 } className="icon" />
                                </div></li>
                                <li><div className="dropdown-item" >
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
                                <li><div className="dropdown-item" >
                                    <h3>Educational Projects</h3>
                                    <FontAwesomeIcon icon={ faGraduationCap } className="icon" />
                                </div></li>
                                <li><div className="dropdown-item" >
                                    <h3>Personal Projects</h3>
                                    <FontAwesomeIcon icon={ faGithub } className="icon" />
                                </div></li>
                                <li><div className="dropdown-item" >
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
                                <li><div className="dropdown-item" >
                                    <h3>My Bio</h3>
                                    <FontAwesomeIcon icon={ faUser } className="icon" />
                                </div></li>
                                <li><div className="dropdown-item" >
                                    <h3>Resume/Abilities</h3>
                                    <FontAwesomeIcon icon={ faFile } className="icon" />
                                </div></li>
                                <li><div className="dropdown-item" >
                                    <h3>Contact</h3>
                                    <FontAwesomeIcon icon={ faEnvelope } className="icon" />
                                </div></li>
                            </ul>
                        </div>                        
                    </div>

                </div>
                <div className="intro">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla lectus quis tellus gravida dapibus. Praesent porta lorem nec ex ultricies porta. Mauris eget arcu eget magna fermentum rhoncus sed et felis. Fusce pretium pharetra leo vel euismod. Nunc commodo arcu a venenatis maximus. Mauris vitae neque in eros congue pulvinar ac a est. Phasellus est ante, varius sed elementum sit amet, placerat eget est. Curabitur blandit dui ac nibh porta, id aliquam nunc mollis. Curabitur pretium metus molestie vehicula pharetra. Curabitur sagittis efficitur augue eu aliquam. Etiam tristique tempus mattis.

                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam maximus sed purus et feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin imperdiet libero enim, nec ultricies lacus scelerisque vel. Phasellus tortor arcu, interdum sed nunc a, rutrum laoreet magna. Vivamus vel sollicitudin eros. Ut non turpis aliquet, rhoncus dolor sit amet, lobortis dolor. Ut quis ante vel leo eleifend elementum. Praesent ut magna ac lacus placerat pretium vel vel nisi. Donec sodales odio eget varius condimentum. Cras et aliquet augue.
                    </p>
                </div>
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