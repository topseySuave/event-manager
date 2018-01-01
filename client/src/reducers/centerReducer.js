import { ADD_CENTER_SUCCESS, FETCH_CENTERS } from '../actions'

export default (state = {}, action = {}) => {
    switch (action.type){
        case ADD_CENTER_SUCCESS:
            return {
                ...state,
                payload: Object.assign({}, action.center)
            };
            break;
        case FETCH_CENTERS:
            return {
                centersData: action.centers
            };
        default:
            return state;
    }
};