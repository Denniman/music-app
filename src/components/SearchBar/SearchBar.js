import React from 'react'
import {SearchInput} from './SearchInput'
import {SearchButton} from './SearchButton'




import {SearchBarContainer} from './SearchBarStyle'

export const SearchBar = () => {
    return(
        <SearchBarContainer>  
            <SearchInput />
            <SearchButton />
        </SearchBarContainer>
    )
} 