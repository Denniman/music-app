import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    background-color: var(--theme-color);
    padding: var(--padding);
    grid-area: nav;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 100%;
    padding: .475rem .9rem;
    border-radius: .5rem;
    color: #495057;
    line-height: 1.7;
    margin-right: -6.5rem;
    margin-top: 2.5rem;
    font-size: 1.5rem;
    border: 1px solid #ced4da;

    &:focus {
        outline: 1px solid tomato;
    }
`

