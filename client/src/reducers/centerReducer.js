import isEmpty from 'lodash/isEmpty';
import {
  ADD_CENTER_SUCCESS,
  ADD_CENTER_REQUEST,
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
const initialState = {
  centers: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CENTER_SUCCESS:
      newState = { ...state };
      newState.centers = newState.centers.concat(action.center);
      return newState;

    case ADD_CENTER_REQUEST:
      newState = { ...state };
      newState.startAddingCenter = true;
      return newState;

    case ADD_CENTER_FAlLURE:
      newCenter = { ...action.center };
      return newCenter;

    case FETCH_CENTERS:
      return action.payload;

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
      newState = {
        ...state,
        loadingmore: false
      };
      newState.centers = newState.centers.concat(action.payload);
      newState.meta.page = parseInt(newState.meta.page + 1, 10);
      newState.meta.pageSize = parseInt(
        newState.meta.pageSize + action.payload.length,
        10
      );
      if (newState.meta.pageSize === newState.meta.totalCount) {
        newState.loadmore = false;
      }
      return newState;

    case SEARCH_CENTER_TITLE:
      if (!isEmpty(action.payload.centers)) {
        return { ...action.payload };
      }
      return state;


    case SEARCH_CENTER_TITLE_FAILED:
      return {
        ...state,
        searchFailure: true,
      };

    default:
      return state;
  }
};
