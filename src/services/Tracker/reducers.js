import { INC_CLICK } from '../types';

const DEFAULT_STATE = {
    clicks: 0,
};

export default (state = DEFAULT_STATE, action = {}) => {
    console.log(state, action);
    switch (action.type) {
        case INC_CLICK: return {
            ...state,
            clicks: state.clicks + 1,
        };
        default: return state;
    }
};
