import React, {useEffect} from 'react'
import {getAlbumsAsync} from '../../actions/getSongsAction'
import { useDispatch, useSelector } from 'react-redux'
import {CategoryTitle} from '../Header/Nav'
import {Board} from './style'
import ReactLoading from 'react-loading';
import {AlbumList} from './AlbumList'

export const TopAlbums = () => {
    const {data:albums, filter, isLoading} = useSelector((state) => state.getSongsReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAlbumsAsync())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  
   const filteredSearch = () => {
       if(!filter) return albums

       const result = []

        for (let i = 0; i < albums.length; i++) {
            const song = albums[i];
            const matched = song?.title?.label?.toLowerCase().includes(filter.toLowerCase())
            if(matched) result.push(song)
            
        }

        return result
   }

   const filteredValue = filteredSearch() 
  
    
    return (
        <>
        <CategoryTitle title="Top Albums"/>
        
        <Board>
        
        {isLoading ? (<ReactLoading type={'spin'} color={'red'} height={'auto'} width={'30vw'} />) : 
        (<AlbumList albums={filteredValue}/>)}

        </Board>
        </>
    )
}