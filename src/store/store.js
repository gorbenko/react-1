import { createStore } from 'redux';
import { CONSTS } from './constants';

const defaultState = {
    cash: 0,
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case CONSTS.ADD_CASH: return { ...state, cash: state.cash + action.payload }; break;
        case CONSTS.GET_CASH: return { ...state, cash: state.cash - action.payload }; break;

        default: return state;
    }
}

export default createStore(reducer);