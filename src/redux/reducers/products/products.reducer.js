import { 
  GET_PRODUCTS,
  GET_PRODUCT
 } from '../../actions';
 
 const initState = {
  products: [],
  product: {}
 }
 
 const productsReducer = (state = initState, action) => {
   switch(action.type) {
     case GET_PRODUCTS:
       return {...state, products : action.products}
     case GET_PRODUCT:
       return {...state, product : action.product}
     default:
       return state;
   }
 }
 
 export default productsReducer;