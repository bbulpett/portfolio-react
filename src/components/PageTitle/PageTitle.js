import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Title } from '../PageTitle/PageTitle.style';

class ShowCurrentLocation extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  render() {
    const { location } = this.props

    return (
      <Title>{location.pathname.split('/').map((s) => (s.slice(0, 1).toUpperCase()) + (s.slice(1))).join('')}</Title>
    )
  }
};

export const CurrentLocation = withRouter(ShowCurrentLocation);