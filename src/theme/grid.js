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
  margin-left: 5%;
  padding: 2em 75px 30px 75px;
  ${media.tablet`
    padding: 2em 0 30px 15px;
  `}
  ${media.phone`
    padding: 2em 0 30px 10px;
  `}
  ${media.desktop`
    padding: 2em 5vw 30px 7.5vw;
  `}
  ${media.giant`
    padding: 2em 5vw 30px 7.5vw;
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