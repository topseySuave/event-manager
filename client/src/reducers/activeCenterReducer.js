import { FETCH_CENTER_DETAIL } from '../actions'

export default (state = {}, action = {}) => {
    switch (action.type){
        case FETCH_CENTER_DETAIL:
            return action.center;
        default:
            return state;
    }
};