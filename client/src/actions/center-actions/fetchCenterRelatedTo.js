import axios from 'axios';

export const fetchCenterRelatedTo = ({ location }) => axios.get(`/api/v1/centers?filter=location&search=${location}&limit=3`);
