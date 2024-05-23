import { CONSTS } from './constants';

const defaultState = {
    cash: 0,
}

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTS.ADD_CASH: return { ...state, cash: state.cash + action.payload };
        case CONSTS.GET_CASH: return { ...state, cash: state.cash - action.payload };

        default: return state;
    }
}

export const addCashAction = payload => ({ type: CONSTS.ADD_CASH, payload });
export const getCashAction = payload => ({ type: CONSTS.GET_CASH, payload });