import GetProductList from "./GetProductList";
import './ProductList.css';

const ProductList = () => {

    return (
        <>
         <div class="product-list">
                <h3 class="my-m">Showing all products</h3>
                <div class="grid grid-1-3">
                  <GetProductList />                 
                </div>
         </div>
        </>
    )
}

export default ProductList;