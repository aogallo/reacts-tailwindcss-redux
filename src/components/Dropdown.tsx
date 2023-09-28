import { FunctionComponent, useState } from 'react'

type Option = {
  label: string
  value: string
}

type DropdownProps = {
  options: Option[]
  selection: string
  onChange: (option: string) => void
}

const Dropdown: FunctionComponent<DropdownProps> = ({
  options,
  selection,
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
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    )
  })

  return (
    <div>
      <div onClick={handleClick}>{selection || 'Select...'}</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  )
}

export default Dropdown
