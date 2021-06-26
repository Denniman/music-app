import React, {useEffect} from 'react'
import {getAlbumsAsync} from '../../actions/getSongsAction'
import { useDispatch, useSelector } from 'react-redux'
import {Card} from '../Card'
import {CategoryTitle} from '../Header/Nav'
import {Footer} from '../Footer/Footer'
import {Board} from './MusicBoardStyle'

export const MusicBoard = () => {
    const {data:albums} = useSelector((state) => state.getSongsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAlbumsAsync())
    }, [])

  
    
    return (
        <>
        <CategoryTitle title="Top Albums"/>
        <Board>
         {albums.map((album) => {
             const {label:albumTitle} = album.title 

             const img = album["im:image"][2].label
             const id = album.id.attributes["im:id"]
             const attribute = album.rights.label

             return (<Card title={albumTitle} attribute={attribute} image={img} key={id}/>)
         })}
        </Board>
         <Footer/>
        </>
    )
}