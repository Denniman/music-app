import {types} from '../type'

const initialState = {
    data: [],
    filter: '',
    isLoading: false
}

export const getSongsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.TOP_SONGS_REQUEST:
            return {isLoading: true}
        case types.GET_TOP_ALBUMS:
            return {...state, data: action.payload,  isLoading: false}
        case types.GET_TOP_SONGS:
            return {...state, data: action.payload, isLoading: false}
        case types.FILTER_SONGS:
            return {...state, filter: action.payload}
        case types.CLEAR_FILTER:
            return {...state, filter: ''}
        default:
            return state
    }
}