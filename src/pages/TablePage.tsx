import Table, { RowType } from "../components/Table"

const TablePage = () => {
  const fruits = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 2 },
    { name: 'Lime', color: 'bg-green-500', score: 1 },
  ]

  const config = [
    { label: 'Name', render: (fruit: RowType) => fruit.name },
    { label: 'Color', render: (fruit: RowType) => 
    <div className={`p-3 m-2 ${fruit.color}`}></div>
 },
  { label: 'Score', render: (fruit: RowType) => fruit.score },
  ]

return <div>
  <Table data={fruits} config={config} />
</div>
}

export default TablePage
