import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


export const List = styled.ul`
    margin: 0 auto;
    padding: 15px;
    list-style: none;
`;

export const Item = styled.li`
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.westar};
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px; 
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    text-decoration: none;
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const StyledButton = styled.button`
    border: none;
    color: ${({ theme }) => theme.colors.white};
    width: 30px;
    height: 30px;
    padding: 0px;
    cursor: pointer;
    transition: 1s;

    ${({ $toggleDone }) => $toggleDone && css`
    background: ${({ theme }) => theme.colors.funGreen};
    
        &:hover {
            filter: brightness(120%);
        }

        &:active {
            filter: brightness(140%);
        }
    `}

    ${({ $remove }) => $remove && css`
        background: ${({ theme }) => theme.colors.torchRed};
    
    
        &:hover {
            filter: brightness(110%);
        }

        &:active {
            filter: brightness(120%);
        }
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover {
            filter: brightness(110%);
        }

    &:active {
        filter: brightness(120%);
    }

    &:visited {
        color: ${({ theme }) => theme.colors.teal};
    }
`;