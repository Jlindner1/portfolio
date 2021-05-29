import React from 'react';
import '../styles/Sidebar.css';
import me from '../img/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.changeContent = this.props.changeContent;
    }

    render () {
        return (
            <div className="sidebar">
                <section className="sticky">
                    <div className="profile-img"><a onClick={(() => this.changeContent("home"))} title="Home" className="home-link"><img src={me}/></a></div>
                    <h1>Hello!</h1>
                    <h2>Josiah Is:</h2>
                    <p>Developing Web Applications From</p><p className="location-p">Edmonton AB, Canada</p>
                    <div className="social">
                        <a className="social-link" href="https://www.linkedin.com/in/josiah-lindner-28b872b6" target="_blank">
                            <FontAwesomeIcon icon={ faLinkedin } className="icon" />
                            <h4>linkedin</h4>
                        </a>
                        <a className="social-link" href="https://github.com/Jlindner1" target="_blank">
                            <FontAwesomeIcon icon={ faGithubSquare } className="icon" />
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </section>                
            </div>


        );
    }
}

export default Sidebar;