export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUB = 'GET_CATEGORIES_SUB';

export function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export function getCategoriesSub(categories) {
  return {
    type: GET_CATEGORIES_SUB,
    categories
  }
}