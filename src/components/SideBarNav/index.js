import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getAlbumsAsync} from '../../actions/getSongsAction'
import { useDispatch, useSelector } from 'react-redux'
import {SearchInput} from '../SearchBar/SearchInput'


import {LinksBtn} from './LinksBtn'

import {SideContainer, Title, LinkContainer, BrowseTitle} from './SidebarStyle'

export const SideBar = () => {

    const {data:albums} = useSelector((state) => state.getSongsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAlbumsAsync())
    }, [])

    const [searchTerm, setSearchTerm] = useState('')

    const inputEl = useRef('')

  const handleChange = (e) => {
    console.log('value is---', inputEl.current.value.toLowerCase());
  }



    return(
        <SideContainer>
        <Title>Stutern Music App</Title>
        <SearchInput  change={handleChange} refVal={inputEl}/>

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
{/* 
        <LinkContainer>
        <Link to={'top-songs'} style={{ textDecoration: 'none' }}>
            <LinksBtn title='Top Songs'/>
        </Link>
        </LinkContainer>

        <LinkContainer>
        <Link to={''} style={{ textDecoration: 'none' }}>
            <LinksBtn title='Playlist'/>
        </Link>
        </LinkContainer> */}
            
        </SideContainer>
    )
}