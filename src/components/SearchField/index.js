import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import {clearFilter} from '../../actions/getSongsAction'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';


import {filteredSongs} from '../../actions/getSongsAction'

import {Input, CustomButton, CustomClose} from './SearchBarStyle'


export const SearchInput = () => {
    const [wordEntered, setWordEntered] = useState('')
    const dispatch = useDispatch()


    const filterInput = (e) => {
        const inputValue = e.target.value
        setWordEntered(inputValue)
        dispatch(filteredSongs(inputValue))
    }


    const clearInput = () => {
        setWordEntered('')
        dispatch(clearFilter())
    }

  
    return (
        <>
        <Input type="text" placeholder="Search music" value={wordEntered} onChange={filterInput}/>
        {wordEntered.length >= 1 ? (<CustomClose icon={<CloseOutlined />} onClick={clearInput} />) : (<CustomButton onClick={clearInput} icon={<SearchOutlined />} />)}
        </>
    )
}