import axios from 'axios';

export const fetchCenterRelatedTo = ({ id, location }) =>
  axios.get(`/api/v1/centers?searchBy=location&search=${location}&basedOn=${id}&limit=3`);
