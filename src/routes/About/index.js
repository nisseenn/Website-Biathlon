import React, { Component } from 'react';
import './index.css';
import test from './test.png'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Contact from  '../Contact'
const images = [
  {
    original: test,
  },
  {
    original: test,
  }
];

class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <h1 className="about-title">About</h1>
        <div className="info-card">
        <p className="about-1">Born:</p><p className="about-11">Drangedal, Norway</p>
        <br />
        <p className="about-2">Age:</p><p className="about-22">23</p>
        <br />
        <p className="about-3">Star sign:</p><p className="about-33">Gemini</p>
        <br />
        <p className="about-4">Siblings:</p><p className="about-44">2 sisters</p>
        <br />
        <p className="about-5">Favourite food:</p><p className="about-55">Avokado</p>
        <br />
        <p className="about-6">Fun fact:</p><p className="about-66"></p>
      </div>
          <div className="image-wrap">
            <div className="picture">
            </div>
          </div>
          <Contact />
      </div>
    );
  }
}

export default About;
