export const SAVE_ORDER = 'SAVE_ORDER';
export const GET_ORDERS = 'GET_ORDERS';
export const UPDATE_ORDERS = 'UPDATE_ORDERS';

export function saveOrder(order) {
  return {
    type: SAVE_ORDER,
    order
  }
}

export function getOrder(orders) {
  return {
    type: GET_ORDERS,
    orders
  }
}

export function updateOrders(orders) {
  return {
    type: UPDATE_ORDERS,
    orders
  }
}
