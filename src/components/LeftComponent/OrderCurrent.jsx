import React, { useState } from "react";
import CustomerNameInput from "./CustomerNameInput";
import ChooseItem from "./ChooseItem";
function OrderCurrent({ products }) {
  // initial state of product
  const initialOrder = {
    name: "",
    products: [],
  };

  //Hook
  const [toggle, setToggle] = useState({});
  const [currenOrder, setCurrenOrder] = useState(initialOrder);

  // product price fun
  const totalPrice = currenOrder.products.reduce((acc, product)=> acc + product.price, 0)
  console.log(totalPrice);
  
  // product add & toggle
const handleClickToggle = (product) => {
  setToggle((prev) => ({
    ...prev,
    [product.id]: !prev[product.id], // icon toggle
  }));

  // যদি আগের state Add (undefined/false) ছিল, তখন product add করো
  if (!toggle[product.id]) {
    setCurrenOrder((prev) => ({
      ...prev,
      products: [...prev.products, product], // নতুন product add
    }));
    console.log(product.price);
    
  } else {
    // Remove icon হলে product remove করতে চাইলে:
    setCurrenOrder((prev) => ({
      ...prev,
      products: prev.products.filter((p) => p.id !== product.id),
    }));
    console.log("Product removed:", product);
  }
};

  return (
    <>
      <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
        <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p className="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of
          their requirements.
        </p>
        {/* Customer Name Input */}
        <CustomerNameInput setCurrenOrder={setCurrenOrder} currenOrder={ currenOrder} />
        {/* Choose Items */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Choose Items</label>
          <ChooseItem products={products} handleClickToggle={handleClickToggle} toggle={ toggle} />
        </div>
        {/* Place Order Button */}
        <button className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
          Place Order {totalPrice}
        </button>
      </div>
    </>
  );
}

export default OrderCurrent;
