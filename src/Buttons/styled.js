import styled, { css } from "styled-components"

export const SectionButtons = styled.div`
    background-color: white;
    display: flex;
    border: none;
    color: teal;
    padding: 20px 15px;
    cursor: pointer;
    transition: 0.5s;

        &:hover {
            color: hsl(180, 96%, 35%);
        }

        &:active{
            color: hsl(180, 96%, 40%);
        }

        ${({ disabled }) => disabled && css`
            color: gray;
            cursor: not-allowed;
            &:hover {
                color: gray
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