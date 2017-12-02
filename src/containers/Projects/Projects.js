import React, { Component } from 'react';
import Zoomy from 'react-zoomy';

class Projects extends Component {
  
  render() {
    return (
      <div>
        {<Zoomy
          imageUrl={require('../../assets/office-photo.jpg')}
          renderThumbnail={({ showImage }) => 
            <img src={require('../../assets/office-photo-small.jpg')} onClick={showImage} />
        }
          scale={[1.1, 1.1]}
          imageProps={{
            style: {
              width: '100vw',
              height: 'auto'
            }
          }}
        />}
        <h1>Projects page</h1>
      </div>
    );
  }
}

export default Projects;