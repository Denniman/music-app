import React from 'react'
import { PlayCircleOutlined   } from '@ant-design/icons';

import {CardContainer, Title, ArtistName, CardBody} from './style'

export const Card = ({id, image, title, artist, link}) => {
    return (
        <ul>
        <li key={id}>
        <CardContainer>
            
            <img src={image} alt={title} style={{width: '100%'}}/>
           

            <CardBody>

                <Title>{title}</Title>

                <ArtistName>{artist}</ArtistName>
                <a href={link} target='_blank' rel="noopener noreferrer">
                    <PlayCircleOutlined style={{color:'#f92d48', fontSize: '2.5rem', marginTop: '1rem'}}/>
                 </a>

            </CardBody>

        </CardContainer>
        </li>
        </ul>
    )
}