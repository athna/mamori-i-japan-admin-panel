import { handleActions } from 'redux-actions';
import actionTypes from './actionTypes';
import { AuthStates } from './types';

const initialState: AuthStates = {
  token: localStorage.getItem('token') || null,
  email: localStorage.getItem('email') || null,
  userAdminRole: localStorage.getItem('userAdminRole') || null,
};

export default handleActions(
  {
    [actionTypes.SAVE_TOKEN_SUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),

    [actionTypes.LOGOUT_SUCCESS]: () => ({
      token: null,
      email: null,
      userAdminRole: null,
      emailForSignIn: null
    }),
  },
  initialState
);
