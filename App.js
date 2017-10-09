import React, { Component } from 'react';
import logo from './podium_logo.png';
import phone from './phone_hand.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="po_header floatleft" alt="logo" />
          <h1 className="po_header floatleft" style={{"margin-top": 5}}>PODIUM</h1>
          <ul className="floatright">
            <li><a href="#">PRODUCT</a></li>
            <li><a href="#">RESOURCES</a></li>
            <li><a href="#">WATCH DEMO</a></li>
            <li><a href="#">LOGIN</a></li>
          </ul>
        </header>
          <img src={phone} className=" section_one_body floatleft"/>
          <div className=" section_one_body"> Some text with a class added for cool styles </div>
          <div className=" section_one_body"> Some more text with a different class for even more cool styles </div>
          <button className="watch_demo_button "> ▶ WATCH DEMO </button>
          <button className="learn_more_button "> LEARN MORE </button>

      </div>
    );
  }
}

export default App;
