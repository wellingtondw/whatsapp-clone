import { Reducer } from 'redux'
import { IExampleState } from './types'

const INITIAL_STATE: IExampleState = {
  example: [],
}

const example: Reducer<IExampleState> = () => {
  return INITIAL_STATE
}

export default example
