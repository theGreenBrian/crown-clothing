import {UserActionTypes} from './user.types';

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,  
    payload: user
});

//this needs to align with the action creater's type