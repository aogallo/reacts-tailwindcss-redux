import { Fragment, ReactElement } from 'react'

export type RowType = {
  name: string
  color: string
  score: number
}

export type ConfigType = {
  label: string
  header?: () => string | ReactElement | number
  sortValue?: (row: RowType) => string | number
  render?: (row: RowType) => string | ReactElement | number
}

export type TableProps = {
  data: RowType[]
  config: ConfigType[]
  keyFn?: (row: RowType) => string | number
}

const Table = ({ data, config, keyFn }: TableProps) => {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>
    }

    return <th key={column.label}>{column.label}</th>
  })

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className='p-3'>
          {column.render?.(rowData)}
        </td>
      )
    })

    return (
      <tr key={keyFn?.(rowData)} className='border-b'>
        {renderedCells}
      </tr>
    )
  })

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  )
}

export default Table
