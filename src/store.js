import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'


let middleware = []

if (process.env.NODE_ENV === 'development') {
    middleware = [thunk, logger];
  } else {
    middleware = [thunk];
}

const store = createStore(rootReducer, applyMiddleware(...middleware))


export default store

