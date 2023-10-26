import styled, { css } from "styled-components"

export const List = styled.ul`
    margin: 0 auto;
    padding: 15px;
    list-style: none;
`;

export const Item = styled.li`
    padding: 10px;
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px; 
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0px;
    cursor: pointer;
    transition: 1s;

    ${({ $toggleDone }) => $toggleDone && css`
    background: hsl(111, 94%, 21%);
    
        &:hover {
            background: hsl(111, 94%, 27%);
        }

        &:active {
            background: hsl(111, 94%, 35%);
        }
    `}

    ${({ $remove }) => $remove && css`
        background: hsl(0, 71%, 53%);
    
    
        &:hover {
            background: hsl(0, 71%, 60%);
        }

        &:active {
            background: hsl(0, 71%, 67%);
        }
    `}
`;