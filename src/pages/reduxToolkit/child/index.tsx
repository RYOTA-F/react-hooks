import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { decrement, increment } from '../slice'

const ReduxToolkitChild: FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default ReduxToolkitChild