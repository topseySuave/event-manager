import { Dispatch } from 'redux';
import axios from 'axios';
import { FETCH_EVENTS, ADD_EVENT, EDIT_EVENT, EDIT_EVENT_REQUEST, REMOVE_EVENT } from '../';

let api = '/api/v1/events';

const eventsDispatchAction = (type, data = {}) => {
    switch (type){
        case 'edit':
            return {
                type: EDIT_EVENT,
                payload: data
            };

        case 'edit_request':
            return {
                type: EDIT_EVENT_REQUEST,
                payload: data
            };

        case 'add':
            return {
                type: ADD_EVENT,
                payload: data
            };

        case 'fetch':
            return {
                type: FETCH_EVENTS,
                payload: data
            };

        case 'delete':
            return {
                type: REMOVE_EVENT,
                payload: data
            };

        default:
            return data;
    }
};

export const editEventAction = (data) => {
    return dispatch => {
        return dispatch(eventsDispatchAction('edit', data));
    };
};

export const createEventRequest = (data) => {
    return dispatch => {
        return axios.post(api, data)
            .then(({ data }) => {
                if(data.statusCode === 200){
                    return dispatch(eventsDispatchAction('add', data.event));
                }else if(data.statusCode === 400){
                    // console.log(data);
                    // Materialize.toast(data.message, 5000);
                    return data;
                }
            })
            .catch((err)=>{
                // console.log('caught error', err);
                Materialize.toast('An error occurred and event cannot be created', 5000);
            });
    };
};

export const fetchEventRequest = () => {
    return dispatch => {
        return axios.get(api)
            .then(({ data }) => {
                // console.log(data);
                dispatch(eventsDispatchAction('fetch', data));
            });
    }
};

export const deleteEventRequest = (id) => {
    id = parseInt(id, 10);
    return dispatch => {
        return axios.delete(api + '/' + id)
            .then(({ data }) => {
                if(data.statusCode === 200){
                    Materialize.toast(data.message, 5000);
                    return dispatch(eventsDispatchAction('delete', data.event));
                }else{
                    Materialize.toast(data.message, 5000);
                    return data;
                }
            })
            .catch((err)=>{
                Materialize.toast(err.message, 5000);
            });
    }
};

export const editEventRequestAction = (data) => {
    return dispatch => {
        return dispatch(eventsDispatchAction('edit_request', data));
    };
};