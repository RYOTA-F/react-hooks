import { legacy_createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

export type RootState = ReturnType<typeof rootReducer>

const store = legacy_createStore(rootReducer, composeWithDevTools())

export default store
