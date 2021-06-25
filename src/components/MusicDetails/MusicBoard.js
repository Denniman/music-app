import React, {useEffect} from 'react'
import {getAlbumsAsync} from '../../actions/getSongsAction'
import { useDispatch, useSelector } from 'react-redux'
import {Card} from '../Card'
import {Board} from './MusicBoardStyle'

export const MusicBoard = () => {
    const {data:songs} = useSelector((state) => state.getSongsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAlbumsAsync())
    }, [])



    // const {label:albumTitle} = songs[47].title || 'not available'

    // const {label} = songs[0].title
    const {label:attribute} = songs.rights || 'not available'

    console.log('attribute--', attribute)
    
    return (
        <>
        <Board>
         {songs.map((song) => {
             const {label:albumTitle} = song.title || 'not available'
             const {label:attribute} = song.rights || 'not available'

             return (<Card title={albumTitle} attribute={attribute}/>)
         })}
        </Board>
        </>
    )
}