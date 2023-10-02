import SortableTable from '../components/SortableTable'
import { ConfigType, RowType } from '../components/Table'

const TablePage = () => {
  const fruits = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 2 },
    { name: 'Lime', color: 'bg-green-500', score: 1 },
  ]

  const config: ConfigType[] = [
    {
      label: 'Name',
      header: () => <th>Name</th>,
      sortValue: (fruit: RowType) => fruit.name,
      render: (fruit: RowType) => fruit.name,
    },
    {
      label: 'Color',
      header: () => <th>Color</th>,
      render: (fruit: RowType) => (
        <div className={`p-3 m-2 ${fruit.color}`}></div>
      ),
      // sortValue: (fruit: RowType) => fruit.color,
    },
    {
      label: 'Score',
      header: () => <th>Score</th>,
      sortValue: (fruit: RowType) => fruit.score,
      render: (fruit: RowType) => fruit.score,
    },
    {
      label: 'Score plus 2',
      sortValue: (fruit: RowType) => fruit.score + 2,
      render: (fruit: RowType) => fruit.score + 2,
    },
  ]

  const keyFn = (fruit: RowType) => {
    return fruit.name
  }

  return <SortableTable data={fruits} config={config} keyFn={keyFn} />
}

export default TablePage
