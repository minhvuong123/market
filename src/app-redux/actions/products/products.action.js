export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';

export function getProducts(products) {
  return {
    type: GET_PRODUCTS,
    products
  }
}

export function getProduct(product) {
  return {
    type: GET_PRODUCT,
    product
  }
}