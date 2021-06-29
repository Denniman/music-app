import React from 'react'
import {SearchInput} from './SearchInput'
import { Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';




import {SearchBarContainer} from './SearchBarStyle'

export const SearchBar = () => {

    const handleClick = () => {
        console.log('clicked')
    }

    return(
        <SearchBarContainer>  
            <SearchInput />
            {/* <SearchButton func={() => handleClick()}/> */}

            {/* <Button onClick={handleClick()} icon={<SearchOutlined />} style={
            {
            padding: '.9rem 2.5rem',
            borderRadius: '.5rem',
            fontSize: '1.5rem',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            backgroundColor: '#252525'
        }
            } />  */}
        </SearchBarContainer>
    )
} 