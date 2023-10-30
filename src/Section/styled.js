import styled from "styled-components"

export const Part = styled.section`
    background-color: white;
    margin: 10px 0;
    word-break: break-word;
    box-shadow: 0 0 5px #ddd;
`;

export const Title = styled.h2`
    font-size: 20px;
    padding: 20px 15px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: flex;
        flex-basis: 100%;
        flex-wrap: wrap;
        margin: 0;
    }
`;

export const SectionList = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ddd;
    background-color: white;

    @media (max-width:  ${({ theme }) => theme.breakpoints.mobile}px) {
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;

    }
`;  