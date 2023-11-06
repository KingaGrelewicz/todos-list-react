import styled, { css } from "styled-components"

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    border: none;
    padding: 20px 15px;
`;

export const Button = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border: none;
    color: ${({ theme }) => theme.colors.teal};
    padding: 20px 15px;
    cursor: pointer;
    transition: 0.5s;

        &:hover {
            filter: brightness(120%);
        }

        &:active{
            filter: brightness(140%);
        }

        ${({ disabled }) => disabled && css`
            color: ${({ theme }) => theme.colors.aluminium};
            cursor: not-allowed;
            &:hover {
                color: ${({ theme }) => theme.colors.aluminium};
            }
        `}
    
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            display: grid;
            grid-template-columns: 1fr;
            justify-content: center;
            border: none;
            padding: 10px;
            margin: 0 auto;
        }
`;