import { Link } from 'react-router-dom';
import './HomeUiOne.css';
const HomeUiOne = () => {



return (
    <>
    <div className="container">
        <div className="grid grid-1-4">
            <Link to='/Products' className="product-link">
                <div className="product-type product-type-1">
                    <span className="product-name">Men</span>
                </div>
            </Link>
            <Link to='/Products' className="product-link">
                <div className="product-type product-type-2">
                    <span className="product-name">Women</span>
                </div>
            </Link>
            <Link to='/Products' className="product-link">
                <div className="product-type product-type-3">
                    <span className="product-name">Kids</span>
                </div>
            </Link>
            <Link to='/Products' className="product-link">
                <div className="product-type product-type-4">
                    <span className="product-name">Sports</span>
                </div>
            </Link>
        </div>
    </div>
    </>
)

}

export default HomeUiOne;