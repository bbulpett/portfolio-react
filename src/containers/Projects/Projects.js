import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
  ImageButton
} from './Projects.style';
import { Containter } from '../../theme/grid';

class Projects extends Component {
  
  render() {
    return (
      <div>
        <h1>Projects page</h1>
        <p><small>(More at <a href='https://github.com/bbulpett'>github.com/bbulpett</a>)</small></p>
        {<Zoomy
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
        />}
      </div>
    );
  }
}

export default Projects;