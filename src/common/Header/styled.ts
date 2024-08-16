import styled from "styled-components"

export const StyledHeader = styled.header`
    @media (max-width:  ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 50px 0px 15px;
    }
`;

