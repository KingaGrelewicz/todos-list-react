import styled from "styled-components";

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.white};
    border: none;
    color: ${({ theme }) => theme.colors.teal};
    padding: 20px 15px;
    cursor: pointer;
    transition: 0.5s;

        &:hover {
            filter: brightness(120%);
        }

        &:active {
            filter: brightness(140%);
        }

        &:disabled {
            color: ${({ theme }) => theme.colors.aluminium};
            cursor: not-allowed;
            filter: none;
        }
    
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
            display: grid;
            grid-template-columns: 1fr;
            justify-content: center;
            border: none;
            padding: 10px;
            margin: 0 auto;
        }
`;