import { Reducer } from 'redux'
import produce from 'immer'

import { ActionTypes, IExampleState } from './types'

const INITIAL_STATE: IExampleState = {
  value: 0,
}

const example: Reducer<IExampleState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addSuccess: {
        const { value } = action.payload
        draft.value += value
        break
      }
      case ActionTypes.removeSuccess: {
        const { value } = action.payload
        draft.value -= value
        break
      }
      default: {
        return draft
      }
    }
  })
}

export default example
