import Counter from '../components/Counter'

export type CountProps = {
  initialCount: number
}

function CounterPage({ initialCount }: CountProps) {
  return <Counter initialCount={initialCount} />
}

export default CounterPage
