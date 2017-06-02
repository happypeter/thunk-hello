import { createStore, applyMiddleware } from 'redux'
import commentReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(commentReducer, applyMiddleware(thunk))

export default store
