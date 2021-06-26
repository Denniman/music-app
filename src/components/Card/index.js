import React from 'react'

import {CardContainer, Title, Attribution, CardBody} from './style'

export const Card = ({id, image, title, attribute}) => {
    return (
        <ul>
        <li key={id}>
        <CardContainer>
            <img src={image} alt={title} style={{width: '100%'}}/>

            <CardBody>

                <Title>{title}</Title>
                <Attribution>{attribute}</Attribution>
            </CardBody>

        </CardContainer>
        </li>
        </ul>
    )
}