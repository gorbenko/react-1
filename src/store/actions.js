import { CONSTS } from './constants';

export function addCash(value) {
    return {
        type: CONSTS.ADD_CASH,
        payload: value,
    };
}

export function getCash(value) {
    return {
        type: CONSTS.GET_CASH,
        payload: value,
    };
}