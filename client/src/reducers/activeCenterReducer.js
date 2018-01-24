import { FETCH_CENTER_DETAIL, REMOVE_CENTER } from '../actions'

export default (state = {}, action = {}) => {
    switch (action.type){
        case FETCH_CENTER_DETAIL:
            return action.center;

        case REMOVE_CENTER:
            return {
                deletedCenter: action.payload
            };

        default:
            return state;
    }
};