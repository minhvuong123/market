import {
  SAVE_ORDER,
  GET_ORDERS,
  UPDATE_ORDER,
  UPDATE_ORDERS,
  GET_ORDERS_COUNT,
  DELETE_ORDER
} from '../../actions';

const initState = {
  orders: [],
  count: 0
}

const ordersReducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_ORDER:
      const index = state.orders.findIndex(o => o.order_product === action.order.order_product);
      if (index !== -1) {
        state.orders[index].order_amount += 1;
      } else {
        state.orders = [...state.orders, action.order];
      }
      return {...state};
    case GET_ORDERS:
      return {...state, orders: action.orders};
    case UPDATE_ORDER:
      state.orders.forEach(order => {
        if(order._id === action.order._id) {
          order.order_amount = action.order.order_amount
          order.order_status = action.order.order_status
        }
      });
      return { ...state};
    case UPDATE_ORDERS:
      return {...state, orders: action.orders};
    case GET_ORDERS_COUNT:
      return {...state, count: action.count};
    case DELETE_ORDER:
      state.orders = state.orders.filter(o => o._id !== action.id);
      return {...state};
    default:
      return state;
  }
}

export default ordersReducer;