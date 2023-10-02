import SortableTable from '../components/SortableTable'
import Table, { RowType } from '../components/Table'

const TablePage = () => {
  const fruits = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 2 },
    { name: 'Lime', color: 'bg-green-500', score: 1 },
  ]

  const config = [
    {
      label: 'Name',
      header: () => <th className='bg-red-500'>Name</th>,
      sortValue: (fruit: RowType) => fruit.name,
      render: (fruit: RowType) => fruit.name,
    },
    {
      label: 'Color',
      header: () => <th className='bg-red-500'>Color</th>,
      render: (fruit: RowType) => (
        <div className={`p-3 m-2 ${fruit.color}`}></div>
      ),
      // sortValue: (fruit: RowType) => fruit.color,
    },
    {
      label: 'Score',
      header: () => <th className='bg-red-500'>Score</th>,
      sortValue: (fruit: RowType) => fruit.score,
      render: (fruit: RowType) => fruit.score,
    },
  ]

  const keyFn = (fruit: RowType) => {
    return fruit.name
  }

  return (
    <div>
      <Table data={fruits} config={config} keyFn={keyFn} />
      <SortableTable data={fruits} config={config} keyFn={keyFn} />
    </div>
  )
}

export default TablePage
