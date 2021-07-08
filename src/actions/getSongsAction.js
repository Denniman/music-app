import {types} from '../type'

const getAlbums = (data) => ({
    type: types.GET_TOP_ALBUMS,
    payload: data
})


const getSongs = (data) => ({
    type: types.GET_TOP_SONGS,
    payload: data
})

export const filteredSongs = (data) => ({
    type: types.FILTER_SONGS,
    payload: data
})

export const clearFilter = () => ({
    type: types.CLEAR_FILTER
})



export const getAlbumsAsync = () => async dispatch => {
    try {
        const res = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
        const data = await res.json()
        dispatch(getAlbums(data.feed.entry))
    } catch (err) {
        console.log(err)
    }
}


export const getSongsAsync = () => async dispatch => {
    try {
        const res = await fetch('https://itunes.apple.com/us/rss/topsongs/limit=100/json')
        const data = await res.json()
        dispatch(getSongs(data.feed.entry))
    } catch (err) {
        console.log(err)
    }
}
