import React, { Component } from 'react';
import './index.css';
import Fade from 'react-reveal/Fade';
import girl from './pictures/girl.svg'
import sun from './pictures/sunny.svg'
import line from './pictures/minus-line.svg'
import biathlon from './pictures/biathlon.svg'
import mountain from './pictures/mountain.svg'
import football from './pictures/football.svg'
import heart from './pictures/heart.svg'
import ski from './pictures/skio.svg'
import baloon from './pictures/balloons.svg'
import ibu from './pictures/ibucup.png'
import globe from './pictures/globe.svg'
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Controller, Scene } from 'react-scrollmagic';

class AboutHome extends Component {
  render() {
    return (
      <div className="about-home-wrapper">
        <ParallaxProvider>
          <div className="text-wrapp">
            <h2 className="bitboutme">Here is my story</h2>
              <div className="herf-name-wrapper">
                <Parallax
                  className="custom-class"
                  offsetXMax={0}
                  offsetXMin={-5}
                  slowerScrollRate
                  tag="figure"
                >
                <hr />
              </Parallax>
                <h2 className="herf-text">My name is Ida Emilie Herfoss</h2>
                <Parallax
                  className="custom-class"
                  offsetXMax={-0.5}
                  offsetXMin={5}
                  slowerScrollRate
                  tag="figure"
                >
                <hr />
              </Parallax>
              </div>
          </div>

        <div className="biathlon-wrapper">
          <Parallax
            className="custom-class"
            offsetXMax={-20}
            offsetXMin={-23}
            slowerScrollRate
            tag="figure"
          >
          <img className="circle" src={sun} />
        </Parallax>
        <Parallax
        className="custom-class2"
        offsetXMax={-26}
        offsetXMin={-26}
        slowerScrollRate
        tag="figure">
        <img className="mountain" src={mountain}></img>
        </Parallax>
        <Parallax
        className="custom-class1"
        offsetXMax={-23}
        offsetXMin={-20}
        slowerScrollRate
        tag="figure">
        <img className="biathlon" src={biathlon}></img>
        </Parallax>
        <div className="dream-wrappper">
        <Fade top>
        <h3 className="dream"> I am trying to live out my dream as a professional biathlete.</h3>
        </Fade>
        </div>
        </div>

        <div className="girl-wrapper">
          <Parallax
          className="custom-class5"
          offsetXMax={22}
          offsetXMin={24}
          slowerScrollRate
          tag="figure"
        >
        <img className="football" src={football}></img>
          </Parallax>
          <Parallax
          className="custom-class4"
          offsetXMax={19}
          offsetXMin={17}
          slowerScrollRate
          tag="figure"
        >
        <img className="ski" src={ski}></img>
          </Parallax>

          <Parallax
          className="custom-class20"
          offsetXMax={23}
          offsetXMin={23}
          slowerScrollRate
          tag="figure"
        >
        <img className="girl" src={girl}></img>
          </Parallax>
          <div className="intro-wrap">
          <Fade top>
          <h3 className="intro">My introduction to sports began early, as a young girl I participated in soccer and cross country skiing</h3>
        </Fade>
        </div>
        </div>

        <div className="heart-wrapper">
          <Parallax
          className="custom-class6"
          offsetXMax={-21.5}
          offsetXMin={-21.5}
          offsetYMax={-50}
          offsetYMin={30}
          slowerScrollRate
          tag="figure"
        >
        <img className="baloon" src={baloon}></img>
          </Parallax>
          <Parallax
          className="custom-class6"
          offsetXMax={-21.5}
          offsetXMin={-21.5}
          offsetYMax={-50}
          offsetYMin={-50}
          slowerScrollRate
          tag="figure"
        >
        <img className="heart" src={heart}></img>
          </Parallax>
          <div className="heart-text-wrap">
          <Fade top>
          <h3 className="heart-text">and at 8 years old, I fell in love with biathlon. </h3>
          </Fade>
          </div>
        </div>

        <div className="ibu-season">
          <Parallax
          className="custom-class9"
          offsetXMax={21}
          offsetXMin={23}
          offsetYMax={1}
          offsetYMin={1}
          slowerScrollRate
          tag="figure"
        >
        <img className="globe" src={globe}></img>
          </Parallax>
          <Parallax
          className="custom-class9"
          offsetXMax={20}
          offsetXMin={18}
          offsetYMax={10}
          offsetYMin={10}
          slowerScrollRate
          tag="figure"
        >
        <img className="ibu" src={ibu}></img>
          </Parallax>
          <div className="ibu-text-wrap">
          <Fade top>
          <h3 className="ibu-text">My professional career started in 2017, participating in the international IBU Cup. </h3>
          </Fade>
          </div>
          </div>
          <br />
        {/* </h3>
      </div> */}
    </ParallaxProvider>
      </div>
    );
  }
}

export default AboutHome;
