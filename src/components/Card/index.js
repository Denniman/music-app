import React from 'react'

import {CardContainer, Title, Attribution, ArtistName, CardBody} from './style'

export const Card = ({id, image, title, artist}) => {
    return (
        <ul>
        <li key={id}>
        <CardContainer>
            <img src={image} alt={title} style={{width: '100%'}}/>

            <CardBody>

                <Title>{title}</Title>

                <ArtistName>{artist}</ArtistName>

            </CardBody>

        </CardContainer>
        </li>
        </ul>
    )
}