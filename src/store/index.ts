import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMidddleware from 'redux-saga'

import rootSaga from './modules/rootSaga'
import rootReducer from './modules/rootReducer'

import { IExampleState } from './modules/example/types'

export interface IState {
  example: IExampleState
}

const sagaMiddleware = createSagaMidddleware()

const middlewares = [sagaMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store
