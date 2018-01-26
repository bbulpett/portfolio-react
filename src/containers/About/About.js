import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Title, TimelineWrapper, Blurb } from './About.style';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class About extends Component {
  render() {
    return (
      <Container>
        <Title>About</Title>
        <h2>What motivates me</h2>
        <Blurb>Something that always fascinates me about software development (and Web development in particular, is the continual exposure to a wide range of business paradigms. I've always been a person with an extremely wide range of interests. From my work on leaning management systems and educational resources to building cutting-edge API-driven manufacuring and logistics systems, I've enjoyed learning the fundamentals of the core industry in addition to broadening my technical skill set.</Blurb>
        <TimelineWrapper>
          <TwitterTimelineEmbed sourceType="profile" screenName="_bulpett" options={{height: 400}} />
        </TimelineWrapper>
      </Container>
    );
  }
}

export default About;
