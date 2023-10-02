import { Fragment } from 'react'
import { CountProps } from '../pages/CounterPage'
import Button from './Button'
import useCounter from '../hooks/useCounter'

function Counter({ initialCount = 0 }: CountProps) {
  const { count, increment } = useCounter(initialCount)

  return (
    <Fragment>
      <div> Count is {count}</div>
      <Button primary onClick={increment}>
        Increment
      </Button>
    </Fragment>
  )
}

export default Counter
