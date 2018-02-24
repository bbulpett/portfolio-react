import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index,
  ParallaxImageWrapper,
  ScreenshotThumb,
  ImgContainer,
  Subtitle
} from './Projects.style';
import { Container, Relative, Flex } from '../../theme/grid';
import { A } from '../../theme/types';
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component {
  
  render() {
    return (
      <Container>

        <Relative marginBottom="10px" marginTop="50px">
          <Index>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox='0 0 300 24'>
              <text textLength='290' lengthAdjust="spacingAndGlyphs" x='0' y="100%"
              font-size-adjust="0.8" >
                  MWW
              </text>
            </svg>
          </Index>
          <Subtitle>MWW On Demand, Inc.</Subtitle>
        </Relative>
        <ImgContainer>
          <ScreenshotThumb src={require("../../assets/mww-home.png")} alt="MWW OnDemand Manufacturing Application home page" />
          <p><small>API documentation at <A href="http://mwwondemand.github.io/" target="_blank">http://mwwondemand.github.io/</A></small></p>
        </ImgContainer>

        <Relative marginBottom="10px">
        <Index>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox='0 0 300 24'>
              <text textLength='290' lengthAdjust="spacingAndGlyphs" x='5' y="100%" >
                  Program Services
              </text>
            </svg>
          </Index>
          <Subtitle>ProgramServices.org</Subtitle>
        </Relative>
        <ImgContainer>
          <ScreenshotThumb src={require("../../assets/programservices-home.png")} alt="Program Services home page" />
          <p><small>Check it out at <A href="https://programservices.org/" target="_blank">https://programservices.org/</A></small></p>
        </ImgContainer>

      </Container>
    );
  }
}

export default Projects;