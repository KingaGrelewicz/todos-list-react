import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.ul`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.teal};
    margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    transition: 0.5s;

    &:hover {
        transform: scale(1.1);
    }
    &.active {
        font-weight: bold;
    }
`;

export const StyledList = styled.li`
    list-style: none;
    padding: 20px;
`;