const FilterReducer = (state, action) => {
  switch (action.type) {
    case "GENDER":
      console.log(state);
      return {
        ...state,
        filter:  action.payload
      };
    case "SORT":
      return {
        ...state,
        sort: action.payload
      };
    case "RATING":
      return {
        ...state,
        rating:  action.payload
      };
      case "CLEAR":
        return {
          ...state,
          clear:  action.payload
        };
    
    default:
      return state;
  }
  
}

export default FilterReducer;

