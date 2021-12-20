import { all, put, takeLatest } from 'redux-saga/effects'

import { addRequest, addSuccess, removeSuccess } from './actions'

type AddSagaRequest = ReturnType<typeof addRequest>

function* addSaga({ payload }: AddSagaRequest) {
  const { value } = payload

  yield put(addSuccess(value))
}

function* removeSaga({ payload }: AddSagaRequest) {
  const { value } = payload

  yield put(removeSuccess(value))
}

export default all([
  takeLatest('ADD_REQUEST', addSaga),
  takeLatest('REMOVE_REQUEST', removeSaga),
])
