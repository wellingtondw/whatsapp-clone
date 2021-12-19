import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { IExampleState } from './modules/example/types'

import rootReducer from './modules/rootReducer'

export interface IState {
  example: IExampleState
}

const store = createStore(rootReducer, composeWithDevTools())

export default store
