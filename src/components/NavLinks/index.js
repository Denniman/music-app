import React from 'react'
import {Link} from 'react-router-dom'

import { LinkContainer, LinksNav } from './style'

export const NavLink = ({title}) => {
    return (
        <LinkContainer>
        <Link to={''} style={{ textDecoration: 'none' }}>
            <LinksNav title={title}/>
        </Link>
        </LinkContainer>
    )
}
