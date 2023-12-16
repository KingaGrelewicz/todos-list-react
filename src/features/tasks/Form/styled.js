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
    border: 1px solid ${({ theme }) => theme.colors.westar};
    width: 100%;
    align-self: center;
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        filter: brightness(120%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(140%);
    }

    @media (max-width:  ${({ theme }) => theme.breakpoints.mobile}px) {
        display: flex;
        flex-grow: 1;
        flex-basis: 100%;
        margin: 10px 0;
        justify-content: center;
}
`;