import styled from "styled-components"

export const StyledForm = styled.form`
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 12px;

    @media (max-width:  ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 0 0 1px;
        display: flex;
        flex-basis: 100%;
        flex-wrap: wrap;
    }
`;

export const NewTask = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    width: 100%;
    align-self: center;
`;

export const Button = styled.button`
    background-color: hsl(180, 100%, 25%);
    color: #fefefe;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        background-color: hsl(180, 96%, 35%);
        transform: scale(1.1);
    }

    &:active {
        background-color: hsl(180, 96%, 40%);
    }

    @media (max-width:  ${({ theme }) => theme.breakpoints.mobile}px) {
        display: flex;
        flex-grow: 1;
        flex-basis: 100%;
        margin: 10px 0;
        justify-content: center;
}
`;