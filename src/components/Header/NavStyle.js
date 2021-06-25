import styled from 'styled-components'

export const CategoriesNav = styled.nav`
    grid-area: nav;
    padding: var(--padding);
`

export const Title = styled.h1`
    font-size: 2.8rem;
`
export const LinkContainer = styled.div`
    padding: .7rem 1.4rem;
    border-radius: .7rem;
    background-color: #2bde69;
    transition: all .3s;

    &:hover {
        background-color: #1db954;
    }

`

export const CategoryTitle = styled.h2`
    font-size: 1.7rem;
    color: #fff;
    letter-spacing: .5rem;
`