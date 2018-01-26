import { FETCH_CENTER_DETAIL, EDIT_CENTER_REQUEST, EDIT_CENTER, REMOVE_CENTER } from '../actions'

export default (state = {}, action = {}) => {
    switch (action.type){
        case FETCH_CENTER_DETAIL:
            return action.center;

        case EDIT_CENTER_REQUEST:
            return {
                ...state,
                editCenter: true
            };

        case EDIT_CENTER:
            return action.payload;

        case REMOVE_CENTER:
            return {
                deletedCenter: action.payload
            };

        default:
            return state;
    }
};