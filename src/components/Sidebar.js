import React from 'react';
import '../styles/Sidebar.css';
import me from '../img/me.jpg';

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };

    }

    render () {
        return (
            <div className="sidebar">
                <section className="sticky">
                    <div className="profile-img"><a className="home-link"><img src={me}/></a></div>
                    <h1>Hello!</h1>
                    <h2>Josiah Lindner</h2> 
                    <p>Creating quality web applications that incorporate quality front and back-end design</p>               
                </section>                
            </div>


        );
    }
}

export default Sidebar;