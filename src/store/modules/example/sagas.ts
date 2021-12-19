import { all, takeLatest } from 'redux-saga/effects'

function checkSaga() {
  console.log('Adicionou mais um valor')
}

export default all([takeLatest('ADD', checkSaga)])
