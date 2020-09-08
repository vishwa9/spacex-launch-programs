import axios from 'axios';

export const FETCH_LAUNCHES = 'fetch_launches';
export const FILTER_LAUNCHES = 'filter_launches';

export const fetchLaunches = (filter) => async dispatch => {
    let baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    if(filter && filter.year) {
        baseUrl = baseUrl + '&launch_year='+ filter.year;
    }
    if(filter && filter.launch) {
        baseUrl = baseUrl + '&launch_success='+ filter.launch;
    }
    if(filter && filter.landing) {
        baseUrl = baseUrl + '&land_success=' + filter.landing;
    }
    const response = await axios.get(baseUrl);

    dispatch({
        type: FETCH_LAUNCHES,
        payload: {launches: response.data, filter: filter}
    });
};

export const filterLaunches = (filters) => {
    return dispatch => {
        dispatch (fetchLaunches(filters));
    }
}
