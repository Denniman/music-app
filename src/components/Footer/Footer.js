import React from 'react'
import {Link} from 'react-router-dom'

import {FooterContainer} from './FooterStyle'

export const Footer = () => {
    return (
        <FooterContainer>
            <p>
                Made with &hearts; by <Link target="_blank" to="https://github.com/denniman">Dennis Terna</Link>
            </p>
            
        </FooterContainer>
    )
}