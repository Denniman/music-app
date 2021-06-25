import {types} from '../type'

const initialState = {
    data: [],
    isLoading: true
}

export const getSongsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_TOP_ALBUMS:
            return {...state, data: action.payload,  isLoading: true}
        case types.GET_TOP_SONGS:
            return {...state, data: action.payload, isLoading: true}
        default:
            return state
    }
}