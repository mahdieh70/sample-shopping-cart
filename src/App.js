import HomePage from "./components/homePage";
import Navbar from "./components/navbar";
import ShoppingCart from "./components/shoppingCart";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="w-full h-screen">
     
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
        </Routes>
     
    </div>
  );
}

export default App;
