
import React, { useState } from 'react';

function ExpenseHistory({ history, sum, setHistory, setSum, isOpen }) {
  //const [selectedExpense, setSelectedExpense] = useState(null)

  if (history.length === 0) {
    return <p>No expenses recorded yet.</p>;
  }

  function b(amount) {
    let sub = sum;
    setSum(parseFloat(sub) - parseFloat(amount));
  }

  function handleDelete(index, amount) {
    setHistory(history.filter((a, i) => i !== index));
  
    b(amount);
  }
  function handleEdit(index, id, amount, category, description, date) {
    // setSelectedExpense({
    //   amount,
    //   category,
    //   description,
    //   date,
    // });
    // setHistory(history[index])
    // setNewExpense({
    //   amount : amount,
    //   category : category,
    //   description : description,
    //   date : date,
    // });
    isOpen();
  }


  return (
    <div className="mt-5">
      <h3 className="text-xl font-semibold text-gray-900">Expense History</h3>
      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">S.No.</th>
            <th className="px-4 py-2 border">Amount</th>
            <th className="px-4 py-2 border">Category</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">DELETE</th>
            <th className="px-4 py-2 border">EDIT</th>
          </tr>
        </thead>
        <tbody>
          {history.map((expense, index) => (
            <tr key={Date.now()}>
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">&#8377;{expense.amount}</td>
              <td className="px-4 py-2 border">{expense.category}</td>
              <td className="px-4 py-2 border">{expense.description}</td>
              <td className="px-4 py-2 border">{expense.date}</td>
              <td className="px-4 py-2 border">
                <button
                  className="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-white bg-black"
                  onClick={() => handleDelete(index, expense.amount)} 
                >
                  DELETE
                </button>
              </td>
              <td  className="px-4 py-2 border">
                 <button
                     className="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-white bg-black"
                     onClick={() => handleEdit(index, expense.amount, expense.description, expense.category, expense.date)} 
                 >
                  EDIT
                </button>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      {sum && <p className="text-blue-500 text-3xl font-bold">TOTAL : &#8377;{sum}</p>}

     

    </div>
  );
}

export default ExpenseHistory;
