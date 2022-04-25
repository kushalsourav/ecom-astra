import { Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import Login from "../Form/Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import { RequireAuth } from "../Form/Authentication/RequireAuth";
import Signup from "../Form/Signup";
const Router = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<RequireAuth><Cart /></RequireAuth>} />
        <Route path="/Wishlist" element={<RequireAuth><Wishlist /></RequireAuth>} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
        </>
    )
}

export default Router;