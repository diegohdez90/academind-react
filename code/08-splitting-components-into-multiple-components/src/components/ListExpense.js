import ExpenseItem from "./ExpenseItem"

function ListExpense({
  expensesList
}) {
  return (
    <div>
    {
      expensesList.map((item, index) => (
        <ExpenseItem
          key={`${item.title}-${index}`}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))
    }
    </div>)
}

export default ListExpense;
