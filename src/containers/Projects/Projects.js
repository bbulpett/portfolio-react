import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton,
  Index
} from './Projects.style';
import { Container, Relative, Flex } from '../../theme/grid';
import { A } from '../../theme/types';

class Projects extends Component {
  
  render() {
    return (
      <Container>
        <Relative marginBottom="50px">
          <Index>
            <h1>01</h1>
          </Index>
          <h1>My Projects</h1>
          <p><small>(More at <A href='https://github.com/bbulpett'>github.com/bbulpett</A>)</small></p>
        </Relative>
        <Flex justify={'center'}>
          <Zoomy
            imageUrl={require('../../assets/office-photo.jpg')}
            renderThumbnail={({ showImage }) => 
              <ImageButton onClick={showImage}>
                <img src={require('../../assets/office-photo-small.jpg')} alt="office"/>
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
      </Container>
    );
  }
}

export default Projects;