import { IValue } from './types'

export const addRequest = (value: IValue) => {
  return {
    type: 'ADD_REQUEST',
    payload: {
      value,
    },
  }
}

export const addSuccess = (value: IValue) => {
  return {
    type: 'ADD_SUCCESS',
    payload: {
      value,
    },
  }
}

export const addFailure = (value: IValue) => {
  return {
    type: 'ADD_FAILURE',
    payload: {
      value,
    },
  }
}

export const removeRequest = (value: IValue) => {
  return {
    type: 'REMOVE_REQUEST',
    payload: {
      value,
    },
  }
}

export const removeSuccess = (value: IValue) => {
  return {
    type: 'REMOVE_SUCCESS',
    payload: {
      value,
    },
  }
}

export const removeFailure = (value: IValue) => {
  return {
    type: 'REMOVE_FAILURE',
    payload: {
      value,
    },
  }
}
