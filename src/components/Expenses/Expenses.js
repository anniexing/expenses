import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({
    expenses
}) => {

    const [filteredYear, setFilteredYear] = useState('2021');

    const yearChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter((expense) => new Date(expense.date).getFullYear().toString() ===  filteredYear);


    return (
        <Card className="expneses">
            <ExpensesFilter selectedYear = {filteredYear} onChangeYearFilter={yearChangedHandler}/>
            <ExpensesChart filterExpenses={filteredExpenses}/>
            <ExpensesList filterExpenses={filteredExpenses} />
        </Card>
    )
}
export default Expenses;