import { ReactElement } from "react"

export type RowType = {
  name: string
  color: string
  score: number
}

type ConfigType = {
  label: string
  render?: (row: RowType) => string | ReactElement | number
}

type TableProps = {
  data: RowType[]
  config: ConfigType[]
  keyFn?: (row: RowType) => string | number
}

const Table = ({ data, config, keyFn }: TableProps) => {
  const renderedHeaders = config.map((column) => <th key={column.label}>{column.label}</th>)

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return <td key={column.label} className="p-3">{column.render?.(rowData)}</td>
    })

    return (
      <tr key={keyFn?.(rowData)} className="border-b">
        {renderedCells}
      </tr>
    )
  })

  return <table className="table-auto border-spacing-2">
    <thead>
      <tr className="border-b-2">
        {renderedHeaders}
      </tr>
    </thead>
    <tbody>
      {renderedRows}
    </tbody>
  </table>
}

export default Table
