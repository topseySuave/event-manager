import { ADD_EVENT, EDIT_EVENT } from '../actions'

export default (state = {}, action = {}) => {
    switch (action.type){
        case ADD_EVENT:
            return {
                ...state,
                event: Object.assign({}, action.payload)
            };
        case EDIT_EVENT:
            return {
                ...state,
                eventToEdit: Object.assign({}, action.payload),
                editEvent: true
            };
        default:
            return state;
    }
};