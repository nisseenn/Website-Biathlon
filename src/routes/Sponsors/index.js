import React, { Component } from 'react';
import './index.css';
import Fade from 'react-reveal/Fade';
import tsgr from './pictures/tsgr.png'
import alliance from './pictures/alliance.png'
import dsb from './pictures/DSB.jpg'
import kvbygg from './pictures/kvbygg.jpg'
import planhuset from './pictures/planhuset.png'
import madshus from './pictures/madshus.jpg'
import alpina from './pictures/alpina.png'
import marwe from './pictures/marwe.png'
import vollestad from './pictures/voll.jpg'
import gs from './pictures/gs.jpg'
import gpn from './pictures/gpn.png'
import byggi from './pictures/byggi.jpg'
import point from './pictures/point.jpg'

class Sponsors extends Component {
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
  render() {
    return (
    <div className="edge-sponsors">
      <h1 className="App-title">Check out my partners</h1>
          <h3 className="front-text2">
            Thanks to my partners who make it possible to persue my goals
          </h3>
          <div className="pic-wrapper">
          <Fade>
            <div className="alpina-wrap">
              <img className="partnerEight" onClick={this.toAlpina} src={alpina} />
              <br />
              <p className="alpina-text">Alpina is a leading company within production of ski boots. As one of the largest in their field they develop smart solutions with new technology.</p>
            </div>
          </Fade>
          <Fade>
            <div className="dsb-wrapper">
              <img className="partnerThree" onClick={this.toDsb} src={dsb} />
              <br />
              <p className="alpina-text">Drangedal sparebank is one of my main sponsors. The local bank in Drangedal have been supporting me since I started my professional career.</p>
            </div>
          </Fade>
            <br />
          <Fade>
            <div className="kvb-wrapper">
              <img className="partnerFour" onClick={this.toKvb} src={kvbygg} />
              <br />
              <p className="alpina-text">KV Bygg is a building company. Their specialty is building houses in Norway.</p>
            </div>
          </Fade>
          <Fade>
            <div className="planhuset-wrapper">
              <img className="partnerFive" onClick={this.toPlanhuset} src={planhuset} />
              <br />
              <p className="plan-text">Planhuset is a company specializing in the norwegian house market.</p>
            </div>
          </Fade>
            <br />
          <Fade>
            <div className="alliance-wrapper">
              <img className="partnerTwo" onClick={this.toAlliance} src={alliance} />
              <br />
              <p className="alliance-text">Alliance is a company which specializes in glasses and sunglasses.</p>
            </div>
          </Fade>
          <Fade>
            <div className="madshus-wrapper">
              <img className="partnerSix" onClick={this.toMadshus} src={madshus} />
              <br />
              <p className="alpina-text">Madshus is one of the leading companies whitin the production of skis.</p>
            </div>
          </Fade>
          <Fade>
            <div className="marwe-wrapper">
              <img className="partnerSeven" onClick={this.toMarwe} src={marwe} />
              <br />
              <p className="alpina-text">Marwe is one of the leading companies whitin the roller skis market.</p>
            </div>
          </Fade>
          <Fade>
            <div className="tsgr-wrapper">
              <img className="partnerOne" onClick={this.toTsgr} src={tsgr} />
              <br />
              <p className="alpina-text">TS Group specializes in ...</p>
            </div>
          </Fade>
          <Fade>
            <div className="vollestad-wrapper">
              <img className="partner9" onClick={this.toVollestad} src={vollestad} />
              <br />
              <p className="alpina-text">Vøllestad ...</p>
            </div>
          </Fade>
          <Fade>
            <div className="gs-wrapper">
              <img className="partner10" onClick={this.toGs} src={gs} />
              <br />
              <p className="alpina-text">GS ...</p>
            </div>
          </Fade>
          <Fade>
            <div className="gpn-wrapper">
              <img className="partner11" onClick={this.toGpn} src={gpn} />
              <br />
              <p className="alpina-text">GPN ...</p>
            </div>
          </Fade>
          <Fade>
            <div className="byggi-wrapper">
              <img className="partner12" onClick={this.toByggi} src={byggi} />
              <br />
              <p className="alpina-text">Byggi ...</p>
            </div>
          </Fade>
        </div>
    </div>
    );
  }
}

export default Sponsors;
