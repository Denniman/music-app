import styled from 'styled-components'

export const Board = styled.div`
    background-color: #fff;
    color: #252525;
    padding: var(--padding);
    grid-area: main;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr auto;
    grid-gap: 2rem;

    @media only screen and (max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
    }
`