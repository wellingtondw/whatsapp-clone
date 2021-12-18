import { useCallback } from 'react'

import { useDispatch } from 'react-redux'

import { add, remove } from '../../store/modules/example/actions'

export const Example = function () {
  const dispatch = useDispatch()

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
      <button type="button" onClick={() => handleAdd(1)}>
        +
      </button>
      <button type="button" onClick={() => handleRemove(1)}>
        -
      </button>
    </>
  )
}
