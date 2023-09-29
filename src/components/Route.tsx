import { ReactNode } from 'react'
import useNavigation from '../hooks/useNavigation'

type RouteProps = {
  path: string
  children: ReactNode
}
const Route = ({ path, children }: RouteProps) => {
  const { currentPath } = useNavigation()

  if (path === currentPath) {
    return children
  }

  return null
}

export default Route
