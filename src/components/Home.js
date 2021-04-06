import React from 'react';
import '../styles/Home.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    

    

    render () {    
        const options = [
        'Resume', 'Projects', 'Contact'
        ];
        const defaultOption = options[0];
        return (
            <div className="home">
                <header className="banner">  
                    <h1>Full Stack Development</h1>
                </header>
                <section className="main-content">
                    <Dropdown className="dropdown" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                </section>                
            </div>
        );
    }
}

export default Home;