import { Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const SearchButton = () => {
    return (
        <Button icon={<SearchOutlined />} style={
            {
            padding: '.9rem 2.5rem',
            borderRadius: '.5rem',
            fontSize: '1.5rem',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            backgroundColor: '#252525'
        }
            } /> 
    )
}