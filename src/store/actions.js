import { CONSTS } from './constants';

export function save(value) {
    return {
        type: CONSTS.SAVE,
        name: value,
    };
}