import styled from "styled-components";

export const StyledContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 0 15px;
  }
`;
