import axios from 'axios'
// import jwtDecode from 'jwt-decode'
import { ADD_CENTER_SUCCESS } from './'

const addCenterPayload = (payload)=>{
    return {
        type: ADD_CENTER_SUCCESS,
        center: payload
    }
};

export const createCenterRequest = (formData) => {
    let token = localStorage.getItem('jwtToken');
    let centerApi = '/api/v1/centers?token=' + token;

    return dispatch => {
        return axios.post(centerApi, formData)
            .then((res)=>{
                if(res.data.statusCode === 201){
                    return dispatch(addCenterPayload(res.data.center));
                }else{
                    return false;
                }
            });
    };
};