import { IValue } from './types'

export const add = (value: IValue) => {
  return {
    type: 'ADD',
    payload: {
      value,
    },
  }
}

export const remove = (value: IValue) => {
  return {
    type: 'REMOVE',
    payload: {
      value,
    },
  }
}
