import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import ExpenseHistory from './ExpenseHistory';

function Home() {
  const [history, setHistory] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [viewHistory, setViewHistory] = useState(false); 
  const [expense, setNewExpense] = useState(

    { 
    id : "",
    amount : "",
    category : "",
    description : "",
    date : ""})
  const [sum, setSum] = useState(0)

  function isOpen() {
    setOpenModal(true);
  }

  function addExpense() {
    setHistory([...history, expense]);
    setNewExpense({ 
      id : Date.now(),
      amount : "",
      category : "",
      description : "",
      date : ""})
   
  }
  console.log(expense.id)
  function a(){
    let add = sum 
    setSum((parseFloat(add) + parseFloat(expense.amount)))
  }

  
  function clickHistory() {
    setViewHistory(!viewHistory); 
  }
  
  return (
    <div className='h-96 flex items-center flex-col p-5'>
      <p className='text-3xl font-bold'>EXPENSE TRACKER</p>
      <div className='h-20 w-full flex justify-between p-4'>
        <Button 
          text="ADD EXPENSE" 
          classname="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300" 
          onClick={isOpen}  
        />
        <Button 
          text="VIEW HISTORY" 
          classname="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300" 
          onClick={clickHistory}  
        />
      </div>

      <Modal 
        isOpen={openModal}  
        setOpenModal={setOpenModal} 
        addExpense={addExpense}
        setNewExpense={setNewExpense}
        expense = {expense}
        setSum = {setSum}
        sum = {sum}
        a = {a}
      />

      {viewHistory && <ExpenseHistory history={history} setHistory={setHistory} setSum = {setSum} sum={sum} isOpen={isOpen} />}  
    </div>
  );
}

export default Home;

