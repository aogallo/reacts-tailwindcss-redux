import { ChangeEventHandler, SyntheticEvent, useReducer } from 'react'
import Button from '../components/Button'
// import Counter from '../components/Counter'
import Panel from '../components/Panel'

export type CountProps = {
  initialCount: number
}

type ActionType =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'change-value'; payload: number }
  | { type: 'adding'; payload: number }

type CounterStateType = {
  count: number
  valueToAdd: number
}

const reducer = (state: CounterStateType, action: ActionType) => {
  if (action.type === 'increment') {
    return {
      ...state,
      count: state.count + 1,
    }
  }

  if (action.type === 'decrement') {
    return {
      ...state,
      count: state.count - 1,
    }
  }

  if (action.type === 'change-value') {
    return {
      ...state,
      valueToAdd: action.payload,
    }
  }

  if (action.type === 'adding') {
    return {
      ...state,
      count: state.count + action.payload,
    }
  }

  return { ...state }
}

function CounterPage({ initialCount = 0 }: CountProps) {
  const initialState = {
    count: initialCount,
    valueToAdd: 0,
  }
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  const increment = () => {
    dispatch({ type: 'increment' })
  }
  const decrement = () => {
    dispatch({ type: 'decrement' })
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    dispatch({ type: 'adding', payload: state.valueToAdd })
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // setValueToAdd(parseInt(event.currentTarget.value) || 0)
    dispatch({
      type: 'toadd',
      payload: parseInt(event.currentTarget.value) || 0,
    })
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button danger onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type='number'
          value={state.valueToAdd}
          onChange={handleChange}
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
        <Button secondary>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage
