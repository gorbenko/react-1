import { CONSTS } from './constants';

const defaultState = {
    customers: []
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CONSTS.ADD_MANY_CUSTOMERS: return {
            ...state,
            customers: [...state.customers, ...action.payload]
        };
        case CONSTS.ADD_CUSTOMER: return { ...state, customers: [...state.customers, action.payload] };
        case CONSTS.REMOVE_CUSTOMERS: return {
            ...state,
            customers: state.customers.filter(customer => customer.id !== action.payload)
        }

        default: return state;
    }
}

export const addCustomerAction = payload => ({ type: CONSTS.ADD_CUSTOMER, payload });
export const removeCustomerAction = payload => ({ type: CONSTS.REMOVE_CUSTOMERS, payload });
export const addManyCustomersAction = payload => ({ type: CONSTS.ADD_MANY_CUSTOMERS, payload });