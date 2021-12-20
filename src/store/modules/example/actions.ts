import { ActionTypes, IValue } from './types'

export const addRequest = (value: IValue) => {
  return {
    type: ActionTypes.addRequest,
    payload: {
      value,
    },
  }
}

export const addSuccess = (value: IValue) => {
  return {
    type: ActionTypes.addSuccess,
    payload: {
      value,
    },
  }
}

export const addFailure = (value: IValue) => {
  return {
    type: ActionTypes.addFailure,
    payload: {
      value,
    },
  }
}

export const removeRequest = (value: IValue) => {
  return {
    type: ActionTypes.removeRequest,
    payload: {
      value,
    },
  }
}

export const removeSuccess = (value: IValue) => {
  return {
    type: ActionTypes.removeSuccess,
    payload: {
      value,
    },
  }
}

export const removeFailure = (value: IValue) => {
  return {
    type: ActionTypes.removeFailure,
    payload: {
      value,
    },
  }
}
