import React from 'react';
import '../styles/Sidebar.css';
import me from '../img/me.jpg';

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
                </section>                
            </div>


        );
    }
}

export default Sidebar;