import React from 'react'

function CustomerNameInput({setCurrenOrder, currenOrder}) {
    // handle customer name
  const handleChageName = (e) => {
    setCurrenOrder((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };
  return (
      <>
       <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Customer Name
          </label>
          <input
            value={currenOrder.name}
            onChange={handleChageName}
            type="text"
            className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            required={true}
          />
        </div>
      </>
  )
}

export default CustomerNameInput