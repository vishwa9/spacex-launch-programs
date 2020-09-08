import { FETCH_LAUNCHES, FILTER_LAUNCHES } from '../actions';
const initialState = {
    launches: [],
    filters: {}
};
export const updateObject = (oldObject, updatedProperties) => { return { ...oldObject, ...updatedProperties }; };

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LAUNCHES:
            return { launches: action.payload.launches, filters: action.payload.filter };
            // return updateObject(state, );
        //case FILTER_LAUNCHES:
          //  return updateObject(state, { filters: action.payload.data });
        default:
            return state;
    }
};