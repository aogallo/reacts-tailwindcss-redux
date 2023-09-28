import { FunctionComponent, useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

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
    <div className='w-48 relative'>
      <div
        className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full'
        onClick={handleClick}
      >
        {value || 'Select...'}
        {isOpen ? (
          <GoChevronDown className='text-lg' />
        ) : (
          <GoChevronLeft className='text-lg' />
        )}
      </div>
      {isOpen && (
        <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>
          {renderOptions}
        </div>
      )}
    </div>
  )
}

export default Dropdown
