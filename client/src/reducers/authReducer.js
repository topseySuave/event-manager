// import isEmpty from 'lodash/isEmpty';
import { ADD_USER, SET_USER, REMOVE_USER } from '../actions';

const initialState = {
    isAuthenticated: false,
    user: {
        firstName: '',
        lastName: '',
        email: ''
    }
};

export default (state = initialState, action = {}) => {
    let isAuthenticated;
    switch (action.type) {
        case ADD_USER:
            return action.payload;
            break;

        case SET_USER:
            isAuthenticated = state.isAuthenticated = true;
            return {
                isAuthenticated,
                user: action.payload
            };
            break;

        case REMOVE_USER:
            // let user = state.user;
            // user.splice(0, state.user.length);
            isAuthenticated = state.isAuthenticated = false;
            return {
                isAuthenticated,
                user: action.payload
            };
            break;

        default:
            return state;
    }
};
