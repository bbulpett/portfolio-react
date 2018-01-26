import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Title, TimelineWrapper } from './About.style';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class About extends Component {
  render() {
    return (
      <Container>
        <Title>About</Title>
        <TimelineWrapper>
          <TwitterTimelineEmbed sourceType="profile" screenName="_bulpett" options={{height: 400}} />
        </TimelineWrapper>
      </Container>
    );
  }
}

export default About;
