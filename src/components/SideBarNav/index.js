import React from 'react'
import {Link} from 'react-router-dom'
import {SearchInput} from '../SearchBar/SearchInput'
import {SearchButton} from '../SearchBar/SearchButton'


import {LinksBtn} from './LinksBtn'

import {SideContainer, Title, LinkContainer, BrowseTitle} from './SidebarStyle'

export const SideBar = () => {

  

    return(
        <SideContainer>
        <Title>Stutern Music App</Title>
        <SearchInput />
        <SearchButton />

        <BrowseTitle>Browse Categories</BrowseTitle>
        
        <LinkContainer>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
            <LinksBtn title='Top Albums'/>
        </Link>
        </LinkContainer>

        <LinkContainer>
        <Link to={'top-songs'} style={{ textDecoration: 'none' }}>
            <LinksBtn title='Top Songs'/>
        </Link>
        </LinkContainer>

        <LinkContainer>
        <Link to={''} style={{ textDecoration: 'none' }}>
            <LinksBtn title='Playlist'/>
        </Link>
        </LinkContainer>
            
        </SideContainer>
    )
}