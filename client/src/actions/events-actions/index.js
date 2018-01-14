import { FETCH_EVENTS, ADD_EVENT, EDIT_EVENT } from '../'


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
    let api = '/api/v1/events';
    let token = localStorage.getItem('jwtToken');
    let config = { headers: { 'x-access-token': token } };

    return dispatch => {
        return axios.post(api, data, config)
            .then(({ data }) => {
                console.log(data);
                if(data.statusCode === 200){
                    return dispatch(eventsDispatchAction('add', data.event));
                }
            })
            .catch((err)=>{
                Materialize.toast('Event cannot be created', 5000)
            });
    };
};

