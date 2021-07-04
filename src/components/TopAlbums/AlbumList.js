import React from 'react'

import {Card} from '../Card'


export const AlbumList = ({albums}) => {
   

    if(albums.length === 0) {
        return <h2>No match Found</h2>
    }
  
    
    return (
        <> 
        
        { albums.map((album) => {
            const {label} = album['im:name']
            const {label:img} = album["im:image"][2]
            const id = album.id.attributes["im:id"]
            const {label:artistName} = album['im:artist']

            return (<Card title={label} artist={artistName} image={img} key={id}/>)
        })}

        </>
    )
}