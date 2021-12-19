import { useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../store'

import { add, remove } from '../../store/modules/example/actions'
import { IValue } from '../../store/modules/example/types'

export const Example = function () {
  const dispatch = useDispatch()
  const exampleValue = useSelector<IState, IValue>(
    (state) => state.example.value
  )

  const handleAdd = useCallback(
    (value) => {
      dispatch(add(value))
    },
    [dispatch]
  )

  const handleRemove = useCallback(
    (value) => {
      dispatch(remove(value))
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
