import { GoArrowDown, GoArrowUp } from 'react-icons/go'
import Table, { TableProps } from './Table'
import useSort from '../hooks/useSort'

function SortableTable(props: TableProps) {
  const { data, config } = props
  const { sortBy, sortedData, sortOrder, setSortColumn } = useSort(data, config)

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column
    }

    return {
      ...column,
      header: () => (
        <th
          className='cursor-pointer hover:bg-gray-100'
          onClick={() => setSortColumn(column.label)}
        >
          <div className='flex items-center'>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    }
  })

  return <Table {...props} data={sortedData} config={updatedConfig} />
}

function getIcons(
  label: string,
  sortBy: string | null,
  sortOrder: string | null
) {
  if (label !== sortBy) {
    return (
      <div className=''>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    )
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    )
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowUp />
      </div>
    )
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowDown />
      </div>
    )
  }
}

export default SortableTable
