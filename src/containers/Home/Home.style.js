import styled from 'styled-components';

export const Image = styled.img`
width: 50%;
`;

export const HeroImage = styled.div`
  color: #FFF;
  height: 65vh;
  background-image: url('${require('../../assets/miitomo.jpg')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  text-align: right;
  font-size: 1.25em;

  h1 {
    margin: 100px 15px 0 0;
  }

  h2 {
    margin: 0 15px 0 0;
  }
`;