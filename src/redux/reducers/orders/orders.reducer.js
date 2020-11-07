import {
  SAVE_ORDER,
  GET_ORDERS,
  UPDATE_ORDER,
  UPDATE_ORDERS
} from '../../actions';

const initState = {
  orders: []
}

const ordersReducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_ORDER:
      return { ...state, orders: [...state.orders, action.order] }
    case GET_ORDERS:
      return { ...state, orders: action.orders}
    case UPDATE_ORDER:
      state.orders.forEach(order => {
        if(order._id === action.order._id) {
          order.order_amount = action.order.order_amount
          order.order_status = action.order.order_status
        }
      })
      return { ...state}
    case UPDATE_ORDERS:
      return { ...state, orders: action.orders}
    default:
      return state;
  }
}

export default ordersReducer;