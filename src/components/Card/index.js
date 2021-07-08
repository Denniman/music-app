import React from 'react'

import {CardContainer, Title, ArtistName, CardBody, Image} from './style'

export const Card = ({id, image, title, artist, link}) => {
    return (
        <ul>
        <li key={id}>
        <CardContainer>
            <a href={link}>
            <Image src={image} alt={title} />
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