import React, { Component } from 'react';
import './index.css';
import InstagramEmbed from 'react-instagram-embed';
import Iframe from 'react-iframe';
import { FaArrowRight } from 'react-icons/fa';
import Contact from '../Contact/index';
import insta from './pictures/insta.png';

class Media extends Component {
  componentDidMount(){
 this.ifr.onload = () => {
 this.ifr.contentWindow.postMessage('hello', "*");
 }
}
componentDidMount() {
 window.addEventListener("message", this.handleFrameTasks);
 }
 componentWillUnmount() {
 window.removeEventListener("message", this.handleFrameTasks);
 }
 toArticle1 = () => {
   window.open('https://www.ta.no/skiskyting/ida-emilie-herfoss/sport/lyktes-i-siste-nm-forsok/s/5-50-186034');
 }
 toArticle2 = () => {
   window.open('https://www.ta.no/skiskyting/ida-emilie-herfoss/drangedal/mye-motgang-endelig-losnet-det/s/5-50-176894');
 }
 toArticle3 = () => {
   window.open('https://www.kv.no/nyheter/sport/ida-emilie-herfoss/ida-emilie-fikk-stipend-pa-40-000-kroner-av-fylket/s/5-63-108530');
 }
 toArticle4 = () => {
   window.open('https://www.kv.no/skiskyting/sport/ida-emilie-herfoss/ida-emilie-pa-fjerdeplass-i-norgescupen/s/5-63-92740');
 }
 toArticle5 = () => {
   window.open(' http://media.skiskyting.no/pressreleases/laguttak-wc-oberhof-og-ruhpolding-og-ibu-cup-brezno-osrblie-2343272');
 }
 toArticle6 = () => {
   window.open(' http://media.skiskyting.no/pressreleases/laguttak-wc-le-grand-bornand-og-ibu-cup-obertilliach-2325880');
 }

  render() {
    return (
    <div className="edge">
      <h1>In media</h1>
      <p>Take a look at some of the articles I am mentioned in</p>
      <div className="post-wrapper">
      <div className="iframe-wrapper">
        <div className="iframe-1">
        <iframe src ="https://www.ta.no/skiskyting/ida-emilie-herfoss/sport/lyktes-i-siste-nm-forsok/s/5-50-186034" sandbox="allow-scripts" height="350px" width="350px" scrolling="no" frameborder="0" ref={(f) => this.ifr = f } />
      <div className="article-text-wrapper">
        <p className="article1" onClick={this.toArticle1}>See full article {<FaArrowRight className="arrow"/>}</p>
      </div>
      </div>
      <div className="iframe-2">
      <iframe src ="      https://www.ta.no/skiskyting/ida-emilie-herfoss/drangedal/mye-motgang-endelig-losnet-det/s/5-50-176894" sandbox="allow-scripts" height="350px" width="350px" scrolling="no" frameborder="0" ref={(f) => this.ifr = f } />
      <div className="article-text-wrapper">
      <p className="article1" onClick={this.toArticle2}>See full article {<FaArrowRight className="arrow"/>}</p>
      </div>
      </div>
      <div className="iframe-2">
      <iframe src ="      https://www.kv.no/nyheter/sport/ida-emilie-herfoss/ida-emilie-fikk-stipend-pa-40-000-kroner-av-fylket/s/5-63-108530" sandbox="allow-scripts" height="350px" width="350px" scrolling="no" frameborder="0" ref={(f) => this.ifr = f } />
      <div className="article-text-wrapper">
      <p className="article1" onClick={this.toArticle3}>See full article {<FaArrowRight className="arrow"/>}</p>
      </div>
      </div>
      <br />
      <div className="iframe-2">
      <iframe src ="      https://www.kv.no/skiskyting/sport/ida-emilie-herfoss/ida-emilie-pa-fjerdeplass-i-norgescupen/s/5-63-92740" sandbox="allow-scripts" height="350px" width="350px" scrolling="no" frameborder="0" ref={(f) => this.ifr = f } />
      <div className="article-text-wrapper">
      <p className="article1" onClick={this.toArticle4}>See full article {<FaArrowRight className="arrow"/>}</p>
      </div>
      </div>
      <div className="iframe-2">
      <iframe src ="          http://media.skiskyting.no/pressreleases/laguttak-wc-oberhof-og-ruhpolding-og-ibu-cup-brezno-osrblie-2343272" sandbox="allow-scripts" height="350px" width="350px" scrolling="no" frameborder="0" ref={(f) => this.ifr = f } />
      <div className="article-text-wrapper">
      <p className="article1" onClick={this.toArticle5}>See full article {<FaArrowRight className="arrow"/>}</p>
      </div>
      </div>
      <div className="iframe-2">
      <iframe src ="            http://media.skiskyting.no/pressreleases/laguttak-wc-le-grand-bornand-og-ibu-cup-obertilliach-2325880" sandbox="allow-scripts" height="350px" width="350px" scrolling="no" frameborder="0" ref={(f) => this.ifr = f } />
      <div className="article-text-wrapper">
      <p className="article1" onClick={this.toArticle6}>See full article {<FaArrowRight className="arrow"/>}</p>
      </div>
      </div>
      </div>
      <br />
    <div className="insta-wrappolini">
    <h1 className="insta-header">A look at my daily life</h1>
      <div className="insta1">
      <InstagramEmbed
        url='https://www.instagram.com/p/BpASxEVARER/?taken-by=herfy95'
        maxWidth={320}
        hideCaption={true}
        protocol=''
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
    <div className="insta3">
      <InstagramEmbed
        url='https://www.instagram.com/p/BeD521MBrEb/?taken-by=herfy95'
        maxWidth={320}
        hideCaption={true}
        protocol=''
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
    <div className="insta2">
      <InstagramEmbed
        url='https://www.instagram.com/p/BkstAaogWZs/?taken-by=herfy95'
        maxWidth={320}
        hideCaption={true}
        protocol=''
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
    <div className="insta4">
      <InstagramEmbed
        url='https://www.instagram.com/p/Bj2tf7kAC1M/?taken-by=herfy95'
        maxWidth={320}
        hideCaption={true}
        protocol=''
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
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

export default Media;
