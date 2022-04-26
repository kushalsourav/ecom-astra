import axios from "axios";
import { useState, useEffect} from "react";
import {useFilter} from './Filter-Context';

const GetProductList =  () => {
const [data, setData] = useState([]);

const {sort, filter, rating, dispatch} = useFilter();

function filterData(list, filter, sort, rating) {
    let returnData = [...list] 
    
    if (filter === "ALL") {
        returnData = [...list];
        
    }
    if (sort === "HIGH_TO_LOW") {  
         returnData =  returnData.sort((a, b) => b.price - a.price);
    }
    if (sort === "LOW_TO_HIGH") {
        returnData = returnData.sort((a, b) => a.price - b.price);
     }
        if (filter === "MEN") {
             returnData = returnData.filter(category => category.gender === "men")   
         }
          if (filter === "WOMEN") {
            returnData = returnData.filter(category => category.gender === "women");
        }
          
        
        if(rating === "FIVE") {
            returnData = returnData.filter(rating => rating.rating === 5);
        }
        if(rating === "FOUR") {
            returnData = returnData.filter(rating => rating.rating === 4);
        }
      
        if(rating === "THREE") {
            returnData =  returnData.filter(rating => rating.rating === 3);
        }
      
        if(rating === "TWO") {
            returnData = returnData.filter(rating => rating.rating === 2);
        }
       return returnData;
  }
const  sortedData=  filterData(data, filter, sort, rating) ;

const getProducts = async () => {
          const products = await axios.get('api/products');
          const data = products.data.products;
          setData(data);
}
 useEffect(() => {
  getProducts();
 }, []);
    return (
        <>
         {sortedData.map(show => <>
                
                <div class="card">
                            <div class="card-vertical-sm">   
                                <img class="card-img"  style={{backgroundImage: `url(${show.url})`}} alt=""></img>
                                <div class="card-head">
                                    <h3 class="card-title">{show.title}</h3>
                                    <span class="text-grey">{show.price}</span>
                                </div>
                                <div class="card-links">
                                    <button class="btn btn-primary btn-large" onClick={() => {dispatch()}}>Add to cart</button>
                                </div>
                                <span class="badge-primary"><p>new</p></span>
                            </div>
                        </div>
          </>)}
        </>
    )
}
export default GetProductList