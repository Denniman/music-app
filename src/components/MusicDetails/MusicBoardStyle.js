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

    @media only screen and (max-width: 1338px) {
        grid-template-columns: repeat(2, .5fr);
        margin-left: 6.5rem;
  }

    @media only screen and (max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
        margin-left: 0;
    }


`

export const Title = styled.h2`
    font-size: 1.7rem;
    color: #252525;
`
export const Card = styled.div`
    background-color: #000;
    border-radius: .7rem;
    padding: 1.7rem 2rem;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
`