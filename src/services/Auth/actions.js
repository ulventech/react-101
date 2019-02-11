import { AUTH_ADD_USER } from '../types';

export const addUser = (name = '') => ({
    type: AUTH_ADD_USER,
    payload: name,
});
