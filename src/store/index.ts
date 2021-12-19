import { createStore } from 'redux'
import { IExampleState } from './modules/example/types'

import rootReducer from './modules/rootReducer'

export interface IState {
  example: IExampleState
}

const store = createStore(rootReducer)

export default store
