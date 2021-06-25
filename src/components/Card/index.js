import React from 'react'

import {CardContainer, Title, Attribution} from './style'

export const Card = ({image, title, attribute}) => {
    return (
        <CardContainer>
            {/* <img src={image} alt={title}/> */}
            <Title>{title}</Title>
            <Attribution attribute={attribute}/>
        </CardContainer>
    )
}