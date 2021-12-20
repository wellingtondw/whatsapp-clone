import { useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../store'

import { addRequest, removeRequest } from '../../store/modules/example/actions'
import { IValue } from '../../store/modules/example/types'

export const Example = function () {
  const dispatch = useDispatch()
  const exampleValue = useSelector<IState, IValue>(
    (state) => state.example.value
  )

  const handleAdd = useCallback(
    (value) => {
      dispatch(addRequest(value))
    },
    [dispatch]
  )

  const handleRemove = useCallback(
    (value) => {
      dispatch(removeRequest(value))
    },
    [dispatch]
  )

  return (
    <>
      {exampleValue}
      <button type="button" onClick={() => handleAdd(1)}>
        +
      </button>
      <button type="button" onClick={() => handleRemove(1)}>
        -
      </button>
    </>
  )
}
