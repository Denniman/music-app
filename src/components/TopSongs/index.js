import React, {useEffect} from 'react'
import {getSongsAsync} from '../../actions/getSongsAction'
import { useDispatch, useSelector } from 'react-redux'
import ReactLoading from 'react-loading';
import {SongsList} from './SongsList'
import {CategoryTitle} from '../Header/Nav'


import {Board} from './style'


export const TopSongs = () => {
    const {data:songs, filter, isLoading} = useSelector((state) => state.getSongsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSongsAsync())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const filteredSearch = () => {
        if(!filter) return songs
 
        const result = []
 
         for (let i = 0; i < songs.length; i++) {
             const song = songs[i];
             const matched = song?.title?.label?.toLowerCase().includes(filter.toLowerCase())
             if(matched) result.push(song)
             
         }
 
         return result
    }
 
    const filteredSong= filteredSearch() 


    return (
        <>
        <CategoryTitle title="Top Songs"/>
        <Board>
            {isLoading ? 
            (<ReactLoading type={'spin'} color={'red'} height={'auto'} width={'30vw'} />) : 
            (<SongsList songs={filteredSong}/>)}
        </Board>
        
        </>
    )
}
