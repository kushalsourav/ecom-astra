import { createContext , useContext, useReducer} from "react";
import FilterReducer from "./FilterReducer";


const filterContext = createContext(null);

const useFilter = () => useContext(filterContext);

const FilterProvider = ({children}) => {
    const [{sort, filter, rating}, dispatch] = useReducer(FilterReducer, {sort:null, filter:null, rating:null})
       
    return (
        <>
        <filterContext.Provider value={{sort, filter,rating ,dispatch}}>
            {children}
        </filterContext.Provider>
        </>
    )
}

export {FilterProvider, useFilter };