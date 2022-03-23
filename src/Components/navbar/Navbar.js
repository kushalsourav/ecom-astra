import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
             return (

            <div>            
               <nav className="navbar">
                    <div className="navbar-title">
                        Astra
                    </div>
                    <div className="navbar-links">
                    <Link to="/"  className="navbar-link"> Home </Link> 
                    <Link to="/Products"  className="navbar-link"> Products </Link>  
                    </div>
                    <div className="navbar-items">
                        <div>
                            <ul className="navbar-list">
                                <li className="navbar-item navbar-icon icon-cart">
                                    <Link to="/Cart"  className="navbar-link">
                                        <span className="btn-icon"><i className="fas fa-shopping-cart"></i>
                                        </span>
                                    </Link>
                                </li>
                                <li className="navbar-item navbar-icon icon-wishlist">
                                    <Link to='/Wishlist' className="navbar-link">
                                        <i className="fas fa-heart"></i></Link>
                                </li>
                            </ul>
                        </div>
                        <Link to='/Login' className="btn btn-primary">Login</Link>
                    </div>
                </nav>
           </div>
             )
}

export default Navbar;
