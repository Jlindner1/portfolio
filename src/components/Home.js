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
        // else{
        //     dc.classList.remove("visible");
        //     dc.classList.add("visually-hidden");
        //     setTimeout(function () {
        //         dc.classList.add('hidden');
        //     }, 50);
        // }
        else {
            dc.classList.remove('visible'); 
            dc.classList.add('visually-hidden');  
             
            // dc.addEventListener('transitionend', function(e) {
            //     dc.classList.add('hidden');
            // }, {
            //     capture: false,
            //     once: true,
            //     passive: false
            // });
            setTimeout(function () {
                dc.classList.add('hidden');
            }, 1000);
        }
        

        
        //let dd = e.target.getElementById(this.id);
        //this.setState({ dropped : true });
        //dd.classList.remove("hidden");
    }

    render () {    
        return (
            <div className="home">
                <header className="banner">  
                    <h1>Full Stack Development</h1>
                </header>
                <section className="main-content">
                    <div className="column">
                        <div className="dropdown">
                            <a onClick={((e) => this.toggleDropdown(e))}><div className="dropdown-button">Click me</div></a>
                            <ul id="dropdown-content" className="dropdown-content visually-hidden hidden">
                                <li>Content 1</li>
                                <li>Content 2</li>
                                <li>Content 3</li>
                            </ul>
                        </div>                        
                    </div>
                    <div className="column">
                        <div className="dropdown">
                            <a onClick={((e) => this.toggleDropdown(e))}><div className="dropdown-button">Click me</div></a>
                            <ul id="dropdown-content" className="dropdown-content visually-hidden hidden">
                                <li>Content 1</li>
                                <li>Content 2</li>
                                <li>Content 3</li>
                            </ul>
                        </div>                        
                    </div>
                    <div className="column">
                        <div className="dropdown">
                            <a onClick={((e) => this.toggleDropdown(e))}><div className="dropdown-button">Click me</div></a>
                            <ul id="dropdown-content" className="dropdown-content visually-hidden hidden">
                                <li>Content 1</li>
                                <li>Content 2</li>
                                <li>Content 3</li>
                            </ul>
                        </div>                        
                    </div>


                </section>                
            </div>
        );
    }
}

export default Home;