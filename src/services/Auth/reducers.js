import {
    INC_CLICK,
    AUTH_ADD_USER,
} from '../types';

const DEFAULT_STATE = {
    user: {},
    users: ['Kim', 'Bob', 'Daniel'],
    test: 0,
};

export default (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case INC_CLICK: return {
            ...state,
            test: state.test + 1,
        };
        case AUTH_ADD_USER: return {
            ...state,
            users: [
                ...state.users,
                action.payload,
            ],
        };
        default: return state;
    }
};
