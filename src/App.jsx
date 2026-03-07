import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Expenses from './Component/Expenses'
function App() {
  const expensesData=[
    {Title: "Toilet Paper", Price:94.12, Date:new Date().toISOString() },
    {Title: "New TV", Price:799.13, Date:new Date().toISOString() },
    {Title: "New Car", Price:2000.13, Date:new Date().toISOString() }
  ];

  

  return (
    <>
     <Expenses expensesList={expensesData}/>
    </>
  )
}

export default App
