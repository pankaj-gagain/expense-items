import ExpenseItem from "./ExpenseItem";
function Expenses({expensesList}){
    return (
        <>
        {expensesList.map((item)=>(
            <div key={item.Title}>
            <ExpenseItem citem={item} />
        </div>
        ))}
        </>
    );
}

export default Expenses;