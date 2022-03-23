import './HomeUiTwo.css';
import { Link } from 'react-router-dom';
const HomeUiTwo = () => {

    return (
        <>
        <div className="container">
          <div className="grid grid-1-2 ">
              <div className="grid-content product-men">
                <div className="overlay">
                    <div className="overlay-content">
                        <div className="overlay-head">
                            <span>50%</span>
                            <span>offer</span>
                        </div>
                        <p className="text-primary">Men</p>
                        <Link to='/Products' className="btn btn-secondary-outline">Shop now!</Link>
                    </div>
                </div>
              </div>
              <div className="grid-content product-women">
                <div className="overlay">
                    <div className="overlay-content">
                        <div className="overlay-head">
                            <span>50%</span>
                            <span>offer</span>
                        </div>
                        <p className="text-primary">Women</p>
                        <Link to='/Products' className="btn btn-secondary-outline">Shop now!</Link>
                    </div>
                </div>
              </div>
           </div>
        </div>
        </>
    )
}

export default HomeUiTwo;