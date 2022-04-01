import './ProductFilter.css';
import { useFilter } from '../ProductLists/Filter-Context';
const ProductFilter = () => {
const {filter,sort,rating,dispatch} = useFilter();

   

    return (
        <>
        <div class="product">
                <form action="#" class="products-filter">
                    <div class="filter">filter <input type="reset" class="btn-text" /></div>
                    <div class="range">
                        <h4 class="heading-quaternary">price</h4>
                        <div>
                            <div class="range-value">
                                <span>50</span>
                                <span>150</span>
                                <span>200</span>
                            </div>
                            <input className='slider' type="range" min="100" max="200" defaultValue="150" step="1"
                          
                            />
                        </div>
                    </div>
                    <label>
                    <input
                       type="radio"
                       name="sort"
                       onClick={() =>
                        dispatch({ type: "GENDER", payload: "ALL" })
                       }
                    checked={filter === "ALL"}
                   ></input>{" "}
                    ALL</label>
                    <div class="categories">
                        <h4>category</h4>
                            <label>
                            <input
                                type="radio"
                                name="sort"
                                onClick={() =>
                                dispatch({ type: "GENDER", payload: "MEN" })
                                }
                             checked={filter === "MEN"}
                            ></input>{" "}
                            Men
                            </label>
                            <label>
                            <input
                                type="radio"
                                name="sort"
                                onClick={() => 
                                dispatch({ type: "GENDER", payload: "WOMEN" })
                                }
                                checked={filter === "WOMEN"}
                            ></input>{" "}
                            Women
                           </label>
                    </div>
                    <div class="categories">
                        <h4>Rating</h4>
                        <label>
                            <input
                                type="radio"
                                name="sort"
                                onChange={() =>
                                dispatch({ type: "RATING", payload: "FIVE" })
                                }
                                checked={rating === "FIVE"}
                            ></input>{" "}
                             4stars and above
                       </label>
                       <label>
                            <input
                                type="radio"
                                name="sort"
                                onChange={() =>
                                dispatch({ type: "RATING", payload: "FOUR" })
                                }
                                checked={rating === "FOUR"}
                            ></input>{" "}
                             3stars and above
                       </label>
                       <label>
                            <input
                                type="radio"
                                name="sort"
                                onChange={() =>
                                dispatch({ type: "RATING", payload: "THREE" })
                                }
                                checked={rating === "THREE"}
                            ></input>{" "}
                             2stars and above
                       </label>
                       <label>
                            <input
                                type="radio"
                                name="sort"
                                onChange={() =>
                                dispatch({ type: "RATING", payload: "TWO" })
                                }
                                checked={rating === "TWO"}
                            ></input>{" "}
                             1stars and above
                       </label>
                    </div>
                    <div class="categories">
                        <h4>sort</h4>
                        <label>
                            <input
                                type="radio"
                                name="sort"
                                onChange={() =>
                                dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                                }
                                checked={sort === "HIGH_TO_LOW"}
                            ></input>{" "}
                             Price - High to low
                       </label>
                       <label>
                            <input 
                                type="radio"
                                name="sort"
                                onChange={() =>
                                dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                                }
                                checked={sort === "LOW_TO_HIGH"}
                            ></input>{" "}
                             Price - Low to High
                       </label>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductFilter;