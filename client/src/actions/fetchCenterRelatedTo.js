import axios from 'axios'

export const fetchCenterRelatedTo = ({ location, facilities, capacity, price }) => {
    return axios.get(`/api/v1/centers?search=${location},${price},${facilities},${capacity}&limit=3`);
};