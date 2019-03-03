import React, { Component } from 'react';
import './index.css';
import Sponsors from '../../routes/Sponsors'
import About from '../../routes/About'
import Home from '../../routes/Home';
import Media from '../../routes/Media';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Parallax } from 'react-parallax'
import bgComp from './her21.jpg'
import bgHome from './heryherf.jpg'
import italy from './italy.jpg'
import ligg from './ligg1.jpg'
import going from './going.jpg'

class Header extends Component {
  constructor(props){
  super(props)
  this.state = {
    bgimg: bgHome,
    title: "IDA EMILIE HERFOSS"
  }
}
  onClickComp = () => {
    this.setState({bgimg: bgComp})
    this.setState({title: "MEDIA"})
  }
  onClickSponsors = () => {
    this.setState({bgimg: ligg})
    this.setState({title: "PARTNERS"})
  }
  onClickAbout = () => {
    this.setState({bgimg: going})
    this.setState({title: "ABOUT"})
  }
  onClickHome = () => {
    this.setState({bgimg: bgHome})
    this.setState({title: "IDA EMILIE HERFOSS"})
  }

  render() {
    return (
      <div className="header-wrapper">
        <Router>
          <div className="link-wrapper">
            <div className="para-wrap">
          <Parallax
            className="bgpicture"
            bgImage={this.state.bgimg}
            strength={400}
            blur={{min: -3,max:3}}
            bgStyle={{position: 'absolute', top: '0px'}}
            >
            <h1 className="herfs" style={{color: this.state.color}}>{this.state.title}</h1>
                <Link to="/" className="hjem" onClick={this.onClickHome}>HOME</Link>
                <Link className="media" style={{color: this.state.color}} to="/media" onClick={this.onClickComp}>MEDIA</Link>
                <Link className="sponsors" style={{color: this.state.color}} to="/sponsors"
                onClick={this.onClickSponsors}>PARTNERS</Link>
                <Link to="/about" style={{color: this.state.color}} className="omida"
                onClick={this.onClickAbout}>ABOUT</Link>
          </Parallax>
            </div>
            <Route exact path="/" component={Home} />
            <Route path="/media" component={Media} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Header;
