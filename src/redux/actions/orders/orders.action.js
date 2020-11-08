export const SAVE_ORDER = 'SAVE_ORDER';
export const GET_ORDERS = 'GET_ORDERS';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const UPDATE_ORDERS = 'UPDATE_ORDERS';
export const GET_ORDERS_COUNT = 'GET_ORDERS_COUNT';

export function saveOrder(order) {
  return {
    type: SAVE_ORDER,
    order
  }
}

export function getOrders(orders) {
  return {
    type: GET_ORDERS,
    orders
  }
}

export function updateOrder(order){
  return {
    type: UPDATE_ORDER,
    order
  }
}

export function updateOrders(orders) {
  return {
    type: UPDATE_ORDERS,
    orders
  }
}

export function getOrdersCount(count) {
  return {
    type: GET_ORDERS_COUNT,
    count
  }
}
