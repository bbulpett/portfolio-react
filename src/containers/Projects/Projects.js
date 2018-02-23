import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index,
  ParallaxImageWrapper,
  ScreenshotThumb,
  ImgContainer
} from './Projects.style';
import { Container, Relative, Flex } from '../../theme/grid';
import { A } from '../../theme/types';
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component {
  
  render() {
    return (
      <Container>

        <Relative marginBottom="50px" marginTop="100px">
          <Index>
            <h1 headingLength={3}>MWW</h1>
          </Index>
          <h2>MWW On Demand, Inc.</h2>
          <p><small>API documentation at <A href="http://mwwondemand.github.io/" target="_blank">http://mwwondemand.github.io/</A></small></p>
        </Relative>
        <ImgContainer>
          <ScreenshotThumb reduceHeight={2/5} src={require("../../assets/mww-home.png")} alt="MWW OnDemand Manufacturing Application home page" className="parallax-projects-image" />
        </ImgContainer>

        <Relative marginBottom="50px">
          <Index>
            <h1>Program Services</h1>
          </Index>
          <h2>ProgramServices.org</h2>
          <p><small>Check it out at <A href="https://programservices.org/" target="_blank">https://programservices.org/</A></small></p>
        </Relative>
        <ImgContainer>
          <ScreenshotThumb src={require("../../assets/programservices-home.png")} alt="Program Services home page" className="parallax-projects-image" />
        </ImgContainer>

      </Container>
    );
  }
}

export default Projects;