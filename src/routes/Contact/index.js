import React, { Component } from 'react';
import './index.css';
import insta from './pictures/insta.png';
import facebook from './pictures/facebook.png'
import linkedin from './pictures/linked.png'
import twitter from './pictures/twitter.png'
import bananas from './pictures/bananas.png'

class Contact extends Component {
  toInsta = () => {
  window.open('https://www.instagram.com/herfy95/?hl=nb');
  }
  toFacebook = () => {
  window.open('https://www.facebook.com/ida.herfoss?ref=br_rs');
  }
  toTwitter = () => {
  window.open('https://twitter.com/herfy95/media');
  }
  toLinked = () => {
  window.open('https://www.linkedin.com/in/ida-emilie-herfoss-254365157');
  }

  render() {
    return (
      <div className="contact-wrapper">
        <h1 className="contact-info">Contact Me</h1>
            <h4 className="feel-free">Got anything you want to discuss? Feel free to contact me</h4>
            <h4 className="email2">idaemilie.95@gmail.com</h4>
            <div className="instagram">
              <img src={insta} className="insta" onClick={this.toInsta}></img>
              <img src={facebook} className="facebook" onClick={this.toFacebook}></img>
              <img src={linkedin} className="linked" onClick={this.toLinked}></img>
              <img src={twitter} className="twitt" onClick={this.toTwitter}></img>
        </div>
      </div>
    );
  }
}

export default Contact;
