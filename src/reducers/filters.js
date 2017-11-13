import {SET_FILTER} from "../actions";
import {Map} from 'immutable';
import {FILTER} from "../actions";

const initialState = Map({
    filter: FILTER.SHOW_ALL
});

export const filterReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
};