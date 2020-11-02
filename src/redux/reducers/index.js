import { combineReducers } from 'redux';
import categoriesReducer from './categories/categories.reducer';
import productsReducer from './products/products.reducer';
import ordersReducer from './orders/orders.reducer';

export default combineReducers({
  categoriesReducer,
  productsReducer,
  ordersReducer
})