import React from 'react'
import { SearchOutlined } from '@ant-design/icons';

import {Input, CustomButton} from './SearchBarStyle'


export const SearchInput = ({change, refVal}) => {
    return (
        <>
        <Input type="text" ref={refVal} value="" placeholder="Search music" onChange={change}/>
        <CustomButton icon={<SearchOutlined />} />
        </>
    )
}