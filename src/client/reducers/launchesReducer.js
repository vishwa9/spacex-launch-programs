import { FETCH_LAUNCHES } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_LAUNCHES:
            return action.payload.data;
        default:
            return state;
    }
};