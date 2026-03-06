
import './ExpenseItem.css';
function ExpenseItem({citem}){
    return(
        <div className='ExpenseItemParentContainer'>
        <div className='ExpenseItem'>{citem.Date}</div>
        <div className='ExpenseItem'>{citem.Title}</div>
        <div className='ExpenseItem'>{citem.Price}</div>
        </div>
    );
}

export default ExpenseItem;