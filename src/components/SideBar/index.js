import React from 'react'
import {Link} from 'react-router-dom'
import {SearchInput} from '../SearchBar/SearchInput'
import {SearchButton} from '../SearchBar/SearchButton'

import {SibeContainer, Title, LinkContainer, LinksNav, BrowseTitle} from './SidebarStyle'

export const SideBar = () => {
    return(
        <SibeContainer>
        <Title>Stutern Music App</Title>
        <SearchInput />
        <SearchButton />

        <BrowseTitle>Browse Categories</BrowseTitle>

        <LinkContainer>
        <Link to={''} style={{ textDecoration: 'none' }}>
            <LinksNav>Top Albums</LinksNav>
        </Link>
        </LinkContainer>

        <LinkContainer>
        <Link to={''} style={{ textDecoration: 'none' }}>
            <LinksNav>Top Songs</LinksNav>
        </Link>
        </LinkContainer>

        <LinkContainer>
        <Link to={''} style={{ textDecoration: 'none' }}>
            <LinksNav>Playlist</LinksNav>
        </Link>
        </LinkContainer>
            
        </SibeContainer>
    )
}