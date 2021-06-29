import styled from 'styled-components'




export const SideContainer = styled.div`
    height: 100%;
    width: 35rem;
    position: fixed;
    padding: var(--padding);
    background-color: #f9f9f9;

    @media only screen and (max-width: 1338px) {
        width: 25rem;
  }

    @media only screen and (max-width: 550px) {
        position: relative;
        width: 100%;
        height: 26vh;
        grid-column: 1/-1;
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

    @media only screen and (max-width: 550px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`
export const LinksNavBtn = styled.button`
    padding: 1rem 2.4rem;
    border-radius: .7rem;
    background-color: #f42538;
    font-size: 1.5rem;
    color: #fff;
    transition: all .3s;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #fb233b;
    }
`
