import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import Login from "../Form/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
const Router = () => {
    
    return (
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
        </>
    )

}

export default Router;