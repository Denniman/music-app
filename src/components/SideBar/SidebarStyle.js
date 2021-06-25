import styled from 'styled-components'




export const SibeContainer = styled.div`
    height: 100%;
    width: 35rem;
    position: fixed;
    z-index: 1;
    /* top: 0; */
    /* overflow-x: hidden; */
    padding: var(--padding);
    background-color: #f9f9f9;
    grid-area: sidebar;

    @media only screen and (max-width: 550px) {
        display: none;
        width: 0;
    }

`
export const Title = styled.h1`
   font-size: 1.8rem;
   color: #252525;
`
export const BrowseTitle = styled.h1`
   font-size: 1.8rem;
   color: #252525;
   margin-top: 3rem;
`

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
