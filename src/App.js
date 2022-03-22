import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/navbar/Navbar";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Wishlist/Wishlist";
import Login from "./Components/Form/Login";


function App() {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
