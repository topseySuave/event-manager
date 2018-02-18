import isEmpty from 'lodash/isEmpty';
import { ADD_CENTER_SUCCESS, FETCH_CENTERS, LOADMORE_CENTER_REQUEST, LOADMORE_CENTER_SUCCESS, LOADMORE_CENTER_FAILURE, SEARCH_TITLE } from '../actions';

let newState;

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_CENTER_SUCCESS:
      return {
        ...state,
        payload: Object.assign({}, action.center)
      };

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

    case SEARCH_TITLE:
      newState = Object.assign([], state);
      if (!isEmpty(newState.centers)) {
        newState.centers.filter((center) => {
          if (center.title.indexOf(action.value) > -1) {
            return center;
          }
        });
      }
      return newState;

    default:
      return state;
  }
};
