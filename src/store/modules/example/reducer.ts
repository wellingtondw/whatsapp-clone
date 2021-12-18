import { Reducer } from 'redux'
import { IExampleState } from './types'

const INITIAL_STATE: IExampleState = {
  example: {
    value: 0,
  },
}

const example: Reducer<IExampleState> = (state, action) => {
  console.log(state, action)

  return INITIAL_STATE
}

export default example
