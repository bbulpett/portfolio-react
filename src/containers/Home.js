import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

const Image = styled.img`
  width: 50%;
`;

export default class Home extends Component {
  render() {
    return (
      <Container className="App">
        <Image src={require('../assets/miitomo.jpg')} alt="miitomo-image"/>
        <p>
        Frosty Christmas Christmas elves jingle bells celebrate bells ornament holly. Wreath gift holiday chimney give reindeer nutcracker elves, chestnuts ornament candy cane calendar reindeer singing. Love ivy noel elves cookie, chestnuts chestnuts gold tree holiday ivy toys. Candy cane noel goodwill chimney goodwill ivy, candy cane stocking carols love ornament toys goodwill icicle. Noel gift give santa, give singing guest partridge calendar partridge bells.
        </p>
      </Container>
    );
  }
}
