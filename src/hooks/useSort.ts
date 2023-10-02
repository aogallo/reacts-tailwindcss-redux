import { useState } from 'react'
import { ConfigType, RowType } from '../components/Table'

export default function useSort(data: RowType[], config: ConfigType[]) {
  const [sortOrder, setSortOrder] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string | null>(null)

  const setSortColumn = (label: string) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc')
      setSortBy(label)
      return
    }

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

  return {
    sortOrder,
    sortBy,
    setSortColumn,
    sortedData,
  }
}
