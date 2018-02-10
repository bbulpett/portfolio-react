import styled, {css} from 'styled-components';
import media from '../theme/media';

export const Div = styled.div`
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}
  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `}
  ${({ marginTop }) => marginTop && css`
    margin-top: ${marginTop};
  `}
  ${({ marginRight }) => marginRight && css`
    margin-right: ${marginRight};
  `}
`;

export const Container = styled(Div)`
  margin-left: 5%;
  padding: 2em 10vw 30px 6.5vw;
  ${media.tablet`
    padding: 1.75em 0 30px 15px;
  `}
  ${media.phone`
    padding: 1.75em 10vw 30px 10vw;
  `}
  ${media.desktop`
    padding: 1.75em 10vw 30px 7.5vw;
  `}
  ${media.giant`
    padding: 1.75em 10vw 30px 6.5vw;
  `}
`;

export const Relative = styled(Div)`
  position: relative;
`;

export const Flex = styled(Div)`
  display: flex;

  ${({ column }) => column && css`
    flex-direction: ${column};
  `}

  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `}

  ${({ align }) => align && css`
    align-content: ${align};
  `}

`;