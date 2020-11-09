import {
  LOADING_STATUS
} from '../../actions';

const initState = {
  loading: true
}

const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_STATUS:
      return { ...state, loading: action.loading }
    default:
      return state;
  }
}

export default loadingReducer;