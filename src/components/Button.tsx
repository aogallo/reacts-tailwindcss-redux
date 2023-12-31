import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

type ExcludeFromTuple<T extends any[], U> = {
  [K in keyof T]: T[K] extends U ? never : T[K]
}[number]

type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
  ? E extends string
    ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
    : never
  : never & {}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    outline?: boolean
    rounded?: boolean
  }> &
  Exclusive<['primary', 'secondary', 'success', 'warning', 'danger'], boolean>

// const defaultProps: Props = {
//   primary: false,
//   secondary: false,
//   success: false,
//   warning: false,
//   danger: false,
//   outline: false,
//   rounded: false,
// }

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const finalClassName = twMerge(
    classNames(rest.className, 'flex items-center  px-3 py-1.5 border', {
      'border-blue-500 bg-blue-500': primary,
      'border-gray-900 bg-gray-900': secondary,
      'border-green-500 bg-green-500': success,
      'border-yellow-400 bg-yellow-400': warning,
      'border-red-500 bg-red-500': danger,
      'rounded-full': rounded,
      'text-white':
        !outline && (primary || secondary || success || warning || danger),
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-500': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-500': outline && warning,
      'text-red-500': outline && danger,
    })
  )

  return (
    <button {...rest} className={finalClassName}>
      {' '}
      {children}
    </button>
  )
}

// Button.defaultProps = defaultProps

export default Button
