import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

function Modal({ isOpen, setOpenModal, setNewExpense, expense, addExpense, a }) {
  if (!isOpen) return null;

  // const [amount, setAmount] = useState('');
  // const [category, setCategory] = useState('');
  // const [description, setDescription] = useState('');
  // const [date, setDate] = useState('');
 
  const [error, setError] = useState('');
  
  function handleChange(e){
      const name = e.target.name
      const value = e.target.value
      setNewExpense({...expense, [name] : value})
      
  }
  console.log(expense)

  function close() {
    setOpenModal(false);
  }
  

  function handleSubmit(e) {
    e.preventDefault();

    if(!expense.amount || expense.amount==0){
       return setError('Please fill in the amount')
    }
    else if(!expense.category){
      return setError('Please choose a category')
    }
    else if(!expense.date){
      return setError('Please fill in the date')
    }
    else{
       setError('')
    }
   
    addExpense()
    a()
    setOpenModal(false);

  }



  return (
    <div>
      <div
        id="static-modal"
        data-modal-backdrop="static"
        className="overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Add Expense</h3>
              <button
                onClick={close}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>


            <div className="p-4">
              {error && <p className="text-red-500">{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Amount</label>
                  <Input
                    type="text"
                    name="amount"
                    onChange={handleChange}
                    className="mt-2 p-2 w-full border rounded"
                    placeholder="Enter amount"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                   
                    name="category"
                    onChange={handleChange}
                    className="mt-2 p-2 w-full border rounded"
                  >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Bills">Bills</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    name="description"
                   
                    onChange={handleChange}
                    className="mt-2 p-2 w-full border rounded"
                    placeholder="Enter a description (optional)"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <Input
                    type="date"
                   
                    name="date"
                    onChange={handleChange}
                    className="mt-2 p-2 w-full border rounded"
                  />
                </div>

                <div className="flex justify-between mt-6">
                  <Button
                    text="SAVE EXPENSE"
                    classname="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
