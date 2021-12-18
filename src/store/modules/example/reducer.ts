import { Reducer } from 'redux'
import { IExampleState } from './types'

const INITIAL_STATE: IExampleState = {
  example: {
    value: 0,
  },
}

const example: Reducer<IExampleState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD': {
      const { value } = action.payload
      return {
        ...state,
        example: {
          value: state.example.value + value,
        },
      }
    }
    case 'REMOVE': {
      const { value } = action.payload
      return {
        ...state,
        example: {
          value: state.example.value - value,
        },
      }
    }
    default: {
      return state
    }
  }
}

export default example
