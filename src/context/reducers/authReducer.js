const DUMMY_authInitialState_FOR_REFERENCE = {
  isLoggedIn: false,
  data: {
    message: 'Successful login',
    type: 'success',
    shortid: 'DVGeKlbeD',
    role: 'user',
    email: 'kabirpokharel12@gmail.com',
  },
  error: null,
  loading: false,
};

import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from '../../constants/actionConstant';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        error: null,
        data: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
