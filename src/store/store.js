import { createStore } from 'redux';
import { CONSTS } from './constants';

function reducer(state, action) {
    switch (action.type) {
        case CONSTS.SAVE: return { value: action.name }; break;
        case CONSTS.ACTION_2: return { value: action.value_2 }; break;

        default: return state;
    }
}

const initialState = {};
initialState[CONSTS.SAVE] = { value: 'Vasya' };

export const store = createStore(reducer, initialState);