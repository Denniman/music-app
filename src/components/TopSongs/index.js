import React, {useEffect} from 'react'
import {getSongsAsync} from '../../actions/getSongsAction'
import { useDispatch, useSelector } from 'react-redux'

import {Card} from '../Card'
import {CategoryTitle} from '../Header/Nav'
import {Footer} from '../Footer/Footer'

import {Board} from './style'


export const TopSongs = () => {
    const {data:songs} = useSelector((state) => state.getSongsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSongsAsync())
    }, [])


    return (
        <>
        <CategoryTitle title="Top Songs"/>
        <Board>
        {songs.map((song) => {
             const {label:songTitle} = song.title 

             const img = song["im:image"][2].label
             const id = song.id.attributes["im:id"]
             const attribute = song.rights.label

             return (<Card title={songTitle} attribute={attribute} image={img} key={id}/>)
         })}
        </Board>
        <Footer/>
        </>
    )
}
