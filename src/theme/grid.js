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
  padding: 30px 75px 15px 75px;
  ${media.tablet`
    padding: 15px 30px;
  `}
  ${media.phone`
    padding: 15px 10px;
  `}
  ${media.desktop`
    padding: 15px 10%;
  `}
  ${media.giant`
    padding: 15px 10%;
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