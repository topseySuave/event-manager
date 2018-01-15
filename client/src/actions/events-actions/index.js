import axios from 'axios'
import { FETCH_EVENTS, ADD_EVENT, EDIT_EVENT } from '../'

let api = '/api/v1/events';
let token = localStorage.getItem('jwtToken');
let config = { headers: { 'x-access-token': token } };

const eventsDispatchAction = (type, data = {}) => {
    if('edit' === type){
        return {
            type: EDIT_EVENT,
            payload: data
        }
    }else if('add'){
        return {
            type: ADD_EVENT,
            payload: data
        }
    }else{
        return {
            type: FETCH_EVENTS,
            payload: data
        }
    }
};

export const editEventAction = (data) => {
    return dispatch => {
        return dispatch(eventsDispatchAction('edit', data));
    };
};

export const createEventRequest = (data) => {
    return dispatch => {
        return axios.post(api, data, config)
            .then(({ data }) => {
                if(data.statusCode === 200){
                    return dispatch(eventsDispatchAction('add', data.event));
                }else if(data.statusCode === 400){
                    Materialize.toast(data.message, 5000);
                    console.log(data);
                }
            })
            .catch((err)=>{
                Materialize.toast('An error occurred and event cannot be created', 5000);
            });
    };
};

