import "./App.css";
import Header from "./components/Header";
import LeftComponent from "./components/LeftComponent";
import products from "./data/products.json";
function App() {
  return (
    <>
      <div className="container mx-auto px-4 h-screen flex flex-col">
        {/*---Navbar---*/}
        <Header />
        {/* Main Content */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          {/* left side component (Create Order Section ) */}
          <LeftComponent products={products} />
          {/* left side component (Create Order Section ) end*/}
        </div>
        {/* Main Content End*/}
      </div>
    </>
  );
}

export default App;
