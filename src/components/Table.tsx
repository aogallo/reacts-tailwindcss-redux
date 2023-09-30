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
}

const Table = ({ data, config }: TableProps) => {
  const renderedHeaders = config.map((column) => <th>{column.label}</th>)

  const renderedRows = data.map((fruit) => {
    const renderedCells = config.map((column) => {
      return <td key={column.label} className="p-3">{column.render?.(fruit)}</td>
    })

    return (
      <tr key={fruit.name} className="border-b">
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
