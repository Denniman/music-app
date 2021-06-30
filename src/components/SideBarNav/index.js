import React from 'react'
import {Link} from 'react-router-dom'

import {SearchInput} from '../SearchBar/SearchInput'


import {LinksBtn} from './LinksBtn'

import {SideContainer, Title, LinkContainer, BrowseTitle} from './SidebarStyle'

export const SideBar = () => {

  


    return(
        <SideContainer>
        <Title>Stutern Music App</Title>
        <SearchInput />

        <BrowseTitle>Browse Categories</BrowseTitle>
        
        <LinkContainer>
        <Link to={'/'} style={{ textDecoration: 'none', marginBottom: '2rem' }}>
            <LinksBtn title='Top Albums'/>
        </Link>

        <Link to={'top-songs'} style={{ textDecoration: 'none', marginBottom: '2rem' }}>
            <LinksBtn title='Top Songs'/>
        </Link>
        <Link to={''} style={{ textDecoration: 'none', marginBottom: '2rem'}}>
            <LinksBtn title='Playlist'/>
        </Link>
        </LinkContainer>
            
        </SideContainer>
    )
}