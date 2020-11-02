import {
  SAVE_ORDER,
  GET_ORDERS,
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
    case UPDATE_ORDERS:
      return { ...state, orders: action.orders}
    default:
      return state;
  }
}

export default ordersReducer;