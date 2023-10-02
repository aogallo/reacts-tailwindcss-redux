import { useState } from 'react'
import Table, { TableProps } from './Table'

function SortableTable(props: TableProps) {
  const [sortOrder, setSortOrder] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string | null>(null)

  const { data, config } = props

  const handleClick = (label: string) => {
    if (sortOrder === null) {
      setSortOrder('asc')
      setSortBy(label)
    } else if (sortOrder === 'asc') {
      setSortOrder('desc')
      setSortBy(label)
    } else if (sortOrder === 'desc') {
      setSortOrder(null)
      setSortBy(null)
    }
  }

  let sortedData = data
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy)

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)

      const reverseOrder = sortOrder === 'asc' ? 1 : -1

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder
      } else {
        return (valueA - valueB) * reverseOrder
      }
    })
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} is sortale
        </th>
      ),
    }
  })

  return <Table {...props} data={sortedData} config={updatedConfig} />
}

export default SortableTable
