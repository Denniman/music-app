import {types} from '../type'

const initialState = {
    data: [],
    filter: '',
    isLoading: true
}

export const getSongsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_TOP_ALBUMS:
            return {...state, data: action.payload,  isLoading: false}
        case types.GET_TOP_SONGS:
            return {...state, data: action.payload, isLoading: false}
        case types.FILTER_SONGS:
            return {...state, filter: action.payload}
        default:
            return state
    }
}