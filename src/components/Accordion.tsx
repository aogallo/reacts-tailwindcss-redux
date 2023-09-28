import { FunctionComponent, useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

type AcordionProps = {
  items: {
    id: string
    label: string
    content: string
  }[]
}

const Accordion: FunctionComponent<AcordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (newIndex: number) => {
    setExpandedIndex((currentExapandedIndex) => {
      if (currentExapandedIndex === newIndex) {
        return -1
      } else {
        return newIndex
      }
    })
  }

  const renderItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index

    return (
      <div key={item.id} onClick={() => handleClick(index)}>
        <div className='flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between'>
          {item.label}
          <span className='text-2xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
      </div>
    )
  })

  return <div className='border-x border-t rounded'>{renderItems}</div>
}

export default Accordion
