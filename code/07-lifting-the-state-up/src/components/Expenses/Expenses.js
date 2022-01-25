import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from  './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [year, setyear] = useState(undefined);
  const filterByYear = (v) => {
    console.log('filterd year', v);
    setyear(v)
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={year}
        onChangeYear={filterByYear}
      />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;