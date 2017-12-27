import styled, {css} from 'styled-components';
import media from '../theme/media';

export const Div = styled.div`
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}
`;

export const Container = styled(Div)`
  padding: 30px 75px 15px 75px;
  ${media.phone`
    padding: 15px 30px;
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