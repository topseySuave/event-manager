import axios from 'axios'
import { REMOVE_CENTER } from '../'

const deleteAction = (data) => {
    return {
        type: REMOVE_CENTER,
        payload: data
    }
};

export const deleteCenterRequest = (id) => {
    let api = '/api/v1/centers/';
    return dispatch => {
        return axios.delete(api + id)
            .then(({ data }) => {
                if(data.statusCode === 200){
                    return dispatch(deleteAction(data));
                }else{
                    Materialize.toast(data.message, 5000);
                    return {};
                }
            })
            .catch((err)=>{
                Materialize.toast(err.message, 5000)
            });
    };
};