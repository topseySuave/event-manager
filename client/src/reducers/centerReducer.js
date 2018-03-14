import isEmpty from 'lodash/isEmpty';
import {
  ADD_CENTER_SUCCESS,
  ADD_CENTER_FAlLURE,
  FETCH_CENTERS,
  LOADMORE_CENTER_REQUEST,
  LOADMORE_CENTER_SUCCESS,
  LOADMORE_CENTER_FAILURE,
  SEARCH_CENTER_TITLE,
  SEARCH_CENTER_TITLE_FAILED
} from '../actions';

let newState;
let newCenter;

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_CENTER_SUCCESS:
      newState = Object.assign({}, state);
      newState.centers = newState.centers.concat(action.center);
      return newState;

    case ADD_CENTER_FAlLURE:
      newCenter = Object.assign({}, action.center);
      return newCenter;

    case FETCH_CENTERS:
      return action.centers;

    case LOADMORE_CENTER_REQUEST:
      return {
        ...state,
        loadingmore: true,
        loadmore: true
      };

    case LOADMORE_CENTER_FAILURE:
      return {
        ...state,
        loadingmore: false
      };

    case LOADMORE_CENTER_SUCCESS:
      newState = Object.assign({}, state);
      newState.centers = newState.centers.concat(action.payload);
      newState.loadingmore = false;
      newState.page = parseInt(newState.page + 1, 10);
      newState.pageSize = parseInt(newState.pageSize + action.payload.length, 10);
      if (newState.pageSize === newState.totalCount) {
        newState.loadmore = false;
      }
      return newState;

    case SEARCH_CENTER_TITLE:
      newState = Object.assign({}, state);
      if (!isEmpty(action.payload)) {
        newState = action.payload;
      } else {
        newState.centers = state.centers;
      }
      return newState;

    case SEARCH_CENTER_TITLE_FAILED:
      newState = Object.assign({}, state);
      newState.searchFailure = true;
      return newState;

    default:
      return state;
  }
};
