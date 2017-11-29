import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { 
  HeroImage,
  RevealP
} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';

export default class Home extends Component {

  render() {
    return (
      <Container className="App">
        <HeroImage>
          <h1>Barnabas Bulpett</h1>
          <h2>Developer</h2>
        </HeroImage>
        {/* TODO: Add an actual photo, perhaps a cinemagraph GIF */}
        {/* <Image src={require('../assets/miitomo.jpg')} alt="miitomo-image"/> */}
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            </RevealP>
          }
        </WhenInView>
      </Container>
    );
  }
}
