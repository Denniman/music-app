import React from 'react'

import {CardContainer, Title, ArtistName, CardBody, Image} from './style'

export const Card = ({id, image, title, artist, link}) => {
    return (
        <ul>
        <li key={id}>
        <CardContainer>
            <a href={link} target="_blank" rel="noopener noreferrer">
            <Image src={image} alt={title} loading="lazy"/>
            </a>
           

            <CardBody>

                <Title>{title}</Title>

                <ArtistName>{artist}</ArtistName>
                
            </CardBody>

        </CardContainer>
        </li>
        </ul>
    )
}