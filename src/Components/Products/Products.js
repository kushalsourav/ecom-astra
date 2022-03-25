import Grid from "../UI/Grid";
import ProductFilter from "./ProductFilter/ProductFilter";
import { FilterProvider } from "./ProductLists/Filter-Context";
import ProductList from "./ProductLists/ProductList";

const Products = () => {

    return (
        <>
         <Grid>
             <FilterProvider>
             <ProductFilter />
             <ProductList />
             </FilterProvider>
         </Grid>
        </>
    )
}

export default Products;