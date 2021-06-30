import React from 'react'
import { useDispatch} from 'react-redux'
import { SearchOutlined } from '@ant-design/icons';

import {filteredSongs} from '../../actions/getSongsAction'

import {Input, CustomButton} from './SearchBarStyle'


export const SearchInput = () => {

    const dispatch = useDispatch()

    const filterInput = (e) => {
        const inputValue = e.target.value
        dispatch(filteredSongs(inputValue))
    }

    return (
        <>
        <Input type="text" placeholder="Search music" onChange={(e) => filterInput(e)}/>
        <CustomButton icon={<SearchOutlined />} />
        </>
    )
}