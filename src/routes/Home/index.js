import React, { Component } from 'react';
import './index.css';
import Sponsors from '../Sponsors/index';
import Contact from '../Contact/index';
import Timeline from '../Timeline/index'
import AboutHome from '../AboutHome/index'
import ImageGallery from 'react-image-gallery';
import Fade from 'react-reveal/Fade';
import "react-image-gallery/styles/css/image-gallery.css";
import jump from 'jump.js';
import tsgr from './pictures/tsgr.png'
import alliance from './pictures/alliance.png'
import dsb from './pictures/DSB.jpg'
import kvbygg from './pictures/kvbygg.jpg'
import planhuset from './pictures/planhuset.png'
import madshus from './pictures/madshus.jpg'
import alpina from './pictures/alpina.png'
import marwe from './pictures/marwe.png'

class Home extends Component {
  scroll = (e) => {
  jump(e.target.value);
  }

  toTsgr = () => {
    window.open('http://tsgroup.com/');
  }
  toAlliance = () => {
    window.open('https://allianceoptikk.no/');
  }
  toDsb = () => {
    window.open('https://drangedalsparebank.no/');
  }
  toKvb = () => {
    window.open('https://www.facebook.com/kvbygg.no/');
  }
  toPlanhuset = () => {
    window.open('https://www.planhuset.no/');
  }
  toMadshus = () => {
    window.open('https://no-no.madshus.com/');
  }
  toAlpina = () => {
    window.open('http://www.alpina.no/index.aspx');
  }
  toMarwe = () => {
    window.open('https://www.marwestore.com/');
  }

  render(){
    return (
      <div className="edge">
        {/* <div class='icon-scroll'>
        </div> */}
        {/* <div className="home-wrapper" id="about"> */}
        <AboutHome />
        <Timeline />
        <div className="edge-sponsors2">
          <div className="Sponsors2" id="sponsors">
              <h1 className="App-title2">PARTNERS</h1>
              <div className="small-line"></div><br />
              <h3 className="front-text2">
                Thanks to my partners who make it possible to persue my goals
                <br />
              </h3>
            <div className="pic-wrapper2">
              <img className="partnerEight2" onClick={this.toAlpina} src={alpina} />
              <img className="partnerTwo2" onClick={this.toAlliance} src={alliance} />
              <img className="partnerThree2" onClick={this.toDsb} src={dsb} />
              <img className="partnerFour2" onClick={this.toKvb} src={kvbygg} />
              <br />
              <img className="partnerFive2" onClick={this.toPlanhuset} src={planhuset} />
              <img className="partnerSix2" onClick={this.toMadshus} src={madshus} />
              <img className="partnerSeven2" onClick={this.toMarwe} src={marwe} />
              <img className="partnerOne2" onClick={this.toTsgr} src={tsgr} />
            </div>
          </div>
        </div>
        <div className="contact info">
          <Contact />
        </div>
      </div>
    );
  }
}

export default Home;
