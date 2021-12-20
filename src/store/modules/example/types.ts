export enum ActionTypes {
  addRequest = 'ADD_REQUEST',
  addSuccess = 'ADD_SUCCESS',
  addFailure = 'ADD_FAILURE',
  removeRequest = 'REMOVE_REQUEST',
  removeSuccess = 'REMOVE_SUCCESS',
  removeFailure = 'REMOVE_FAILURE',
}

export type IValue = number

export interface IExampleState {
  value: IValue
}
