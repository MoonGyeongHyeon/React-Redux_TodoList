import {ADD, COMPLETE, UNDO} from "../actions";
import {Map, List} from 'immutable';
import {FILTER} from "../actions";

const initialState = List([]);

export const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return state.push(
                Map({
                    txt: action.txt,
                    filter: FILTER.SHOW_DOING
                })
            );
        case COMPLETE:
            return state.update(
                action.index,
                item => item.set('filter', FILTER.SHOW_COMPLETE)
            );
        case UNDO:
            console.log(action.index);
            return state.update(
                action.index,
                item => item.set('filter', FILTER.SHOW_DOING)
            );
        default:
            return state;
    }
};