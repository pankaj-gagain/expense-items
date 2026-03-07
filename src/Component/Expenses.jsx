import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React from "react";
function Expenses({expensesList}){
    const[year,setYear]= React.useState("");
    const yearHandler=(event)=>{
        setYear(event.target.value);
    };
    return (
        <>
        <ExpensesFilter selectYear={yearHandler}/>
        {expensesList.map((item)=>(
            <div key={item.Title}>
            <ExpenseItem citem={item} />
        </div>
        ))}
        </>
    );
}

export default Expenses;