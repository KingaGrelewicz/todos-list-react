import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    display: grid;
    grid-template-columns: auto auto;
    text-decoration: none;
    justify-content: center;

    &.active {
        color: ${({ theme }) => theme.colors.torchRed};
    }
`;

export const StyledList = styled.li`
    list-style: none;
`;