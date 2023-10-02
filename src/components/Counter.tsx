import { Fragment, useState } from 'react'
import { CountProps } from '../pages/CounterPage'
import Button from './Button'

function Counter({ initialCount = 0 }: CountProps) {
  const [count, setCount] = useState(initialCount)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <Fragment>
      <div> Count is {count}</div>
      <Button primary onClick={handleClick}>
        Increment
      </Button>
    </Fragment>
  )
}

export default Counter
