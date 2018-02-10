import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { TimelineWrapper, Blurb, H2 } from './About.style';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class About extends Component {
  render() {
    return (
      <Container>
        <H2>What motivates me</H2>
        <Blurb>Something that always fascinates me about software development is the opportunity to learn about an infinite variety of business paradigms. I've always been a person with an extremely wide range of interests. From my work on learning management systems and educational resources to building cutting-edge API-driven manufacuring and logistics systems, I've enjoyed learning the fundamentals of the core industries in addition to broadening my development skills.</Blurb>
        <H2>Social media</H2>
        <Blurb>Twitter is one of my favorite ways to keep up with literally everything.</Blurb>
        <TimelineWrapper>
          <TwitterTimelineEmbed sourceType="profile" screenName="_bulpett" options={{height: 400, chrome: "nofooter"}} />
        </TimelineWrapper>
      </Container>
    );
  }
}

export default About;
