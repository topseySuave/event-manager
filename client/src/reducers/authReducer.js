import isEmpty from 'lodash/isEmpty';
import { ADD_USER } from '../actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };

        default: return state;
    }

};
