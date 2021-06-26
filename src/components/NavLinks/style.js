import styled from 'styled-components'

export const LinkContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const LinksNav = styled.div`
    padding: .7rem 2.4rem;
    border-radius: .7rem;
    background-color: #f42538;
    font-size: 1.5rem;
    color: #fff;
    transition: all .3s;

    &:hover {
        background-color: #fb233b;
    }
`