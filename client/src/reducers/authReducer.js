import isEmpty from 'lodash/isEmpty';
import { ADD_USER, SET_USER } from '../actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_USER:
            return action.payload;

        case SET_USER:
            return {
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default: return state;
    }

};
