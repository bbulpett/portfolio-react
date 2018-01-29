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

// TODO: Container component breaks width when viewport gets real wide. Fix that.
export const Container = styled(Div)`
  margin-left: 2.5vw;
  max-width: 77.5vw;
  padding: 30px 75px 15px 75px;
  ${media.tablet`
    padding: 30px 30px;
  `}
  ${media.phone`
    padding: 30px 10px;
  `}
  ${media.desktop`
    padding: 30px 7.5%;
  `}
  ${media.giant`
    padding: 30px 10%;
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