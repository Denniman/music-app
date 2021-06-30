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
        <Link to={'https://music.apple.com/us/genre/music-pop/id14?uo=2'} style={{ textDecoration: 'none', marginBottom: '2rem'}}>
            <LinksBtn title='iTunes Playlist'/>
        </Link>
        </LinkContainer>
            
        </SideContainer>
    )
}