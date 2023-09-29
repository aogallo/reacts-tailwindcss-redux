import { MouseEvent, ReactNode } from 'react'
import classNames from 'classnames'
import useNavigation from '../hooks/useNavigation'

type LinkProps = {
  to: string
  children?: ReactNode
  className?: string
  activeClassName?: string
}

const Link = ({ to, children, className, activeClassName }: LinkProps) => {
  const { currentPath, navigate } = useNavigation()

  const finalClass = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  )

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return
    }

    event.preventDefault()
    navigate(to)
  }

  return (
    <a className={finalClass} href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link
