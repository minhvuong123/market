import { 
 GET_CATEGORIES,
 GET_CATEGORIES_SUB
} from '../../actions';

const initState = {
  categories: [],
  categories_sub: []
}

const categoriesReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_CATEGORIES:
      return {...state, categories : action.categories}
    case GET_CATEGORIES_SUB:
      return {...state, categories_sub : action.categories}
    default:
      return state;
  }
}

export default categoriesReducer;