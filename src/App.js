import './styles/App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    }
    this.changeContent = this.changeContent.bind(this);
  }

  changeContent = (e) => {
    this.setState({ page: e });
  }
  
  
  render() {
    return (
      <div className="App">
        <Sidebar changeContent={this.changeContent} />
        <Home changeContent={this.changeContent} page={this.state.page} />
      </div>
    );       
  }


}

export default App;
