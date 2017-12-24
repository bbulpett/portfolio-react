import styled, { css } from 'styled-components';

export const Image = styled.img`
width: 50%;
`;

export const HeroImage = styled.div`
  color: #FFF;
  height: 90vh;
  background-image: url('${require('../../assets/miitomo.jpg')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 10vh;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  text-align: right;
  font-size: 1em;

  h1 {
    letter-spacing: -0.075em;
    margin: 70vh 10px 0;
  }

  h2 {
    margin: 0 10px;
  }
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;

    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }

  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;