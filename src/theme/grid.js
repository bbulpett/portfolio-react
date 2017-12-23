import styled, {css} from 'styled-components';

export const Div = styled.div`
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}
`;

export const Container = styled(Div)`
  padding: 30px 75px 15px 75px;
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