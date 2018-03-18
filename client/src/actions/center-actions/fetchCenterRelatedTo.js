import axios from 'axios';
import history from '../../util/history';

export const fetchCenterRelatedTo = ({ location }) => (axios.get(`/api/v1/centers?filter=location&search=${location}&limit=3`));
