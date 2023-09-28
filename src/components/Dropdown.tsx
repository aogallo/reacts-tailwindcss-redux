import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'
import Panel from './Panel'

type Option = {
  label: string
  value: string
}

type DropdownProps = {
  options: Option[]
  value: string
  onChange: (option: string) => void
}

const Dropdown: FunctionComponent<DropdownProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const divEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (event: { target: any }) => {
      if (!divEl.current) {
        return
      }

      if (!divEl.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handler, true)

    const cleanup = () => {
      document.removeEventListener('click', handler)
    }

    return cleanup
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: Option) => {
    setIsOpen(false)
    onChange(option.label)
  }

  const renderOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    )
  })

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer '
        onClick={handleClick}
      >
        {value || 'Select...'}
        {isOpen ? (
          <GoChevronDown className='text-lg' />
        ) : (
          <GoChevronLeft className='text-lg' />
        )}
      </Panel>
      {isOpen && <Panel className='absolute top-full '>{renderOptions}</Panel>}
    </div>
  )
}

export default Dropdown
