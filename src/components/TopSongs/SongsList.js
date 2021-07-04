import React from 'react'

import {Card} from '../Card'


export const SongsList = ({songs}) => {
   

    if(songs.length === 0) {
        return <h2>No match Found</h2>
    }
  
    
    return (
        <> 
        
        { songs.map((song) => {
             const {label} = song['im:name']
             const {label:img} = song["im:image"][2]
             const id = song.id.attributes["im:id"]
             const {label:artistName} = song['im:artist']

            return (<Card title={label} artist={artistName} image={img} key={id}/>)
        })}

        </>
    )
}