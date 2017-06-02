import { createStore } from 'redux'
import commentReducer from './reducers'

const store = createStore(commentReducer)

export default store
