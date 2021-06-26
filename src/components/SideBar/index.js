import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {SearchInput} from '../SearchBar/SearchInput'
import {SearchButton} from '../SearchBar/SearchButton'
import { useDispatch, useSelector } from 'react-redux'
// import {NavLink} from '../NavLinks'
import {TopSongs} from '../TopSongs'

import {LinksBtn} from './LinksBtn'

import {SibeContainer, Title, LinkContainer, BrowseTitle} from './SidebarStyle'

export const SideBar = () => {

    const {data:songs} = useSelector((state) => state.getSongsReducer)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(TopSongs())
    // }, [])


    const handleChange = () => {
        console.log('disppatched')
        // dispatch(TopSongs())
    }

    return(
        <SibeContainer>
        <Title>Stutern Music App</Title>
        <SearchInput />
        <SearchButton />

        <BrowseTitle>Browse Categories</BrowseTitle>
        
        <LinkContainer>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
            <LinksBtn title='Top Albums' change={handleChange}/>
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
            
        </SibeContainer>
    )
}