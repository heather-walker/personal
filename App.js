import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Modal from 'react-modal';
import logo from './podium_logo.png';
import phone from './phone_hand.png';
import close from './close-icon.png';
import './App.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '20px',
    backgroundColor       : 'lightgray',
    overflow              : 'visible',


  },
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    background        : 'linear-gradient(rgba(0,0,0,.85), rgba(255,255,255,.85))',
  }
};

class App extends Component {

  constructor() {
   super();

   this.state = {
     modalIsOpen: false
   };

   this.openModal = this.openModal.bind(this);
   this.afterOpenModal = this.afterOpenModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
 }

 openModal() {
   this.setState({modalIsOpen: true});
 }

 afterOpenModal() {
   // references are now sync'd and can be accessed.
   this.subtitle.style.color = '#033B5C';
   this.subtitle.style.fontWeight = '100';
   this.subtitle.style.letterSpacing = '.5px';
 }

 closeModal() {
   this.setState({modalIsOpen: false});
 }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="po_header floatleft" alt="logo" />
          <h1 className="po_header floatleft" style={{"marginTop": 5}}>PODIUM</h1>
          <ul className="floatright">
            <li><a href="#">PRODUCT</a></li>
            <li><a href="#">RESOURCES</a></li>
            <li><a href="#">WATCH DEMO</a></li>
            <li><a href="#">LOGIN</a></li>
          </ul>
        </header>
        <div style={{ height: 585, borderBottom:"1px solid lightgray"}}>
          <img src={phone} className=" section_one_body floatleft" style={{marginTop: "-40px"}} alt="mobile"/>
          <div className=" section_one_body"> Engage with customers on their terms. </div>
          <div className=" section_one_body part_two"> Podium takes all the guesswork out of engaging with your customers.
          We take a non-invasive approach to gathering feedback and building relationships. </div>
          <button className="watch_demo_button " id="openModal" onClick={this.openModal}> ▶ WATCH DEMO </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
          <img src={close} className=" close_icon" alt="close" onClick={this.closeModal}/>
          <div style={{"textAlign": "center"}}>
          <img src={logo} className="po_header" alt="logo" />
          <p ref={subtitle => this.subtitle = subtitle}>ENTER YOUR EMAIL TO WATCH</p>
          <form>
            <input className="modal_input_text" placeholder="ENTER.EMAIL@COMPANY.COM"/>
            <div style={{marginTop: 20}}>(no spam, we promise!)</div>
            <button className="watch_demo_button modal" >
            <a href="https://youtu.be/U9t-slLl30E?t=5s" style={{color: "inherit"}}> ▶ WATCH DEMO </a>
            </button>
          </form>
          </div>
        </Modal>
          <button className="learn_more_button "> LEARN MORE </button>
          </div>
          <div>
          <div className=" section_one_body floatleft"> Get found. Get chosen. Get insights.
          <button className="learn_reviews_button "> LEARN ABOUT REVIEWS </button>
          </div>
          </div>

      </div>
    );
  }
}

export default App;
