import React, {useEffect} from 'react'
import {getAlbumsAsync} from '../../actions/getSongsAction'
import { useDispatch, useSelector } from 'react-redux'
import {Card} from '../Card'
import {CategoryTitle} from '../Header/Nav'
import {Board} from './MusicBoardStyle'

export const MusicBoard = () => {
    const {data:albums, filter} = useSelector((state) => state.getSongsReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAlbumsAsync())
    }, [])

  
   const filteredSearch = () => {
       if(!filter) return albums

       const result = []

        for (let i = 0; i < albums.length; i++) {
            const song = albums[i];
            const matched = song?.title?.label?.toLowerCase().includes(filter.toLowerCase())
            if(matched) {
                result.push(song)
            }
        }

        return result
   }

   const filteredValue = filteredSearch() 
  
    
    return (
        <>
        <CategoryTitle title="Top Albums"/>
        <Board>
         {filteredValue.map((album) => {
             const {label:albumTitle} = album.title 

             const img = album["im:image"][2].label
             const id = album.id.attributes["im:id"]
             const attribute = album.rights.label

             return (<Card title={albumTitle} attribute={attribute} image={img} key={id}/>)
         })}
        </Board>
        </>
    )
}