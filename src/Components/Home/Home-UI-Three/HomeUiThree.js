import { Link } from 'react-router-dom';
import './HomeUiThree.css';

const HomeUiThree = () => {

    return(
        <>
        <div className="container">
           <div className="grid grid-1-2">
                <div className="card">
                    <div className="card-horizontal">
                        <div className="card-img card-img-1"></div>
                        <div className="card-abt">
                            <div className="card-head">
                                <h3 className="card-title">New Collection</h3>
                            </div>
                            <div className="card-info">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, sequi hic. Simil
                            </div>
                            <Link to='/Products' className="btn btn-primary text-center">Shop now!</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-horizontal">
                        <div className="card-img card-img-2"></div>
                        <div className="card-abt">
                            <div className="card-head">
                                <h3 className="card-title">New Collection</h3>
                            </div>
                            <div className="card-info">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, sequi hic. Simil
                            </div>
                            <Link to='/Products' className="btn btn-primary text-center">Shop now!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeUiThree;