import React from 'react'

import {CategoriesNav,  Title,} from './NavStyle'

export const CategoryTitle = ({title}) => {
    return (
        <CategoriesNav>
            <Title>{title}</Title>
        </CategoriesNav>
    )
}