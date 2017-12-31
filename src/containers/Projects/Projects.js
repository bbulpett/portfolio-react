import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index,
  ParallaxImageWrapper,
  Title
} from './Projects.style';
import { Container, Relative, Flex } from '../../theme/grid';
import { A } from '../../theme/types';
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component {
  
  render() {
    return (
      <Container>
        {<Title>Projects</Title>}
        <Relative marginBottom="50px" marginTop="100px">
          <Index>
            <h1>01</h1>
          </Index>
          <h2>Project Title</h2>
          <p><small>More at <A href="https://github.com/bbulpett" target="_blank">github.com/bbulpett</A></small></p>
        </Relative>
        <Flex justify={'center'}>
          <Zoomy
            imageUrl={require("../../assets/office-photo.jpg")}
            renderThumbnail={({ showImage }) => 
              <ImageButton onClick={showImage}>
                <img src={require("../../assets/office-photo-small.jpg")} alt="office"/>
              </ImageButton>
          }
            scale={[1.1, 1.1]}
            imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
            }}
          />
        </Flex>
        <Relative marginBottom="50px">
          <Index>
            <h1>02</h1>
          </Index>
          <h2>Project Title</h2>
          <p><small>Check it out at <A href="https://github.com/bbulpett" target="_blank">github.com/bbulpett</A></small></p>
        </Relative>
        <ParallaxImageWrapper>
          <ParallaxImage reduceHeight={2/5} src={require("../../assets/raleigh-photo.jpg")} alt="raleigh" className="parallax-projects-image" />
        </ParallaxImageWrapper>
      </Container>
    );
  }
}

export default Projects;