import axios from 'axios';

export const FETCH_LAUNCHES = 'fetch_launches';
export const fetchLaunches = () => async dispatch => {
    const response = await axios.get('https://api.spaceXdata.com/v3/launches?limit=100');

    dispatch({
        type: FETCH_LAUNCHES,
        payload: response
    });
};