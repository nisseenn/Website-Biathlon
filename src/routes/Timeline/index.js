import React, { Component } from 'react';
import './index.css';
import { Parallax } from 'react-parallax';
import p1 from './p2.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGlobeAmericas, FaTrophy } from 'react-icons/fa';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline-wrapper" id="timeline">
        <Parallax className="p1" bgImage={p1}
        bgStyle={{position: 'absolute'}}
        strength={200}
        blur={{min: 0,max:2}}
      >
      <h1 className="highlights">HIGHLIGHTS</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2018"
            iconStyle={{ background: '#FC5A3A', color: '#fff' }}
            icon={<FaTrophy />}
          >
            <h3 className="vertical-timeline-element-title">Norwegian Cup</h3>
            <h4 className="vertical-timeline-element-subtitle">Molde</h4>
            <p>
              2.place - Sprint
              <br />
              3.place - Normal
            </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--brez"
        date="January 2018"
        iconStyle={{ background: '#167BFF', color: '#fff' }}
        icon={<FaGlobeAmericas />}
      >
        <h3 className="vertical-timeline-element-title">IBU Cup</h3>
        <h4 className="vertical-timeline-element-subtitle">Brezno Orsblie, Slovakia</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--lenz"
        date="December 2017"
        iconStyle={{ background: '#167BFF', color: '#fff' }}
        icon={<FaGlobeAmericas />}
      >
        <h3 className="vertical-timeline-element-title">IBU Cup</h3>
        <h4 className="vertical-timeline-element-subtitle">Lenzerheide, Switzerland</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--ober"
        date="December 2017"
        iconStyle={{ background: '#167BFF', color: '#fff' }}
        icon={<FaGlobeAmericas />}
      >
        <h3 className="vertical-timeline-element-title">IBU Cup</h3>
        <h4 className="vertical-timeline-element-subtitle">Obertilliach, Austria</h4>
      </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2017"
          iconStyle={{ background: '#FC5A3A', color: '#fff' }}
          icon={<FaTrophy />}
        >
          <h3 className="vertical-timeline-element-title">Norwegian Cup</h3>
          <h4 className="vertical-timeline-element-subtitle">Geilo</h4>
          <p>
            2.place - Sprint
            <br />
            3. place - Mass start
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2017"
          iconStyle={{ background: '#FC5A3A', color: '#fff' }}
          icon={<FaTrophy />}
        >
          <h3 className="vertical-timeline-element-title">Norwegian Cup</h3>
          <h4 className="vertical-timeline-element-subtitle">Os, Østerdalen</h4>
          <p>
            3.place - Mass start
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="january 2017"
          iconStyle={{ background: '#FC5A3A', color: '#fff' }}
          icon={<FaTrophy />}
        >
          <h3 className="vertical-timeline-element-title">Norwegian championship</h3>
          <h4 className="vertical-timeline-element-subtitle">Holmenkollen</h4>
          <p>
            3.place - Normal
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2016"
          iconStyle={{ background: '#FC5A3A', color: '#fff' }}
          icon={<FaTrophy />}
        >
          <h3 className="vertical-timeline-element-title">Norwegian championship</h3>
          <h4 className="vertical-timeline-element-subtitle">Oppdal</h4>
          <p>
            2.place - Sprint
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </Parallax>
      </div>
    );
  }
}

export default Timeline;
