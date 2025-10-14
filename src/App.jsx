import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import OrderCurrent from "./components/LeftComponent/OrderCurrent";
import products from "./data/products.json";
function App() {
  const [order, setOrder] = useState([]);

  const handleOrder = (order) => {
    console.log(order);
  };
  return (
    <>
      <div className="container mx-auto px-4 h-screen flex flex-col">
        {/*---Navbar---*/}
        <Header />
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          {/* left side component (Create Order Section ) */}
          <OrderCurrent products={products} onOrder={handleOrder} />
          {/* left side component (Create Order Section ) end*/}
        </div>
        {/* Main Content End*/}
      </div>
    </>
  );
}

export default App;
