import { useState } from 'react'
import Dropdown from '../components/Dropdown'

const DropdownPage = () => {
  const [selection, setSelection] = useState<string>('')

  const handleSelect = (option: string) => {
    setSelection(option!)
  }

  const options = [
    {
      label: 'Red',
      value: 'red',
    },
    {
      label: 'Blue',
      value: 'blue',
    },
    {
      label: 'Black',
      value: 'black',
    },
  ]

  return (
    <div>
      <Dropdown value={selection} onChange={handleSelect} options={options} />
    </div>
  )
}

export default DropdownPage
