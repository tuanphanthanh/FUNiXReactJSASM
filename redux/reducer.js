import { DEPARTMENTS } from '../shared/staffs';
import { STAFFS } from '../shared/staffs';

export const initialState = {
    staffs: STAFFS,

    deps: DEPARTMENTS
};

export const Reducer = (state = initialState, action) => {
    return state;
};