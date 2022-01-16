import React, { createContext, useReducer } from 'react';
import authInitialState from './initialStates/authInitialState';
import authReducer from './reducers/authReducer';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const contextValue = {
    authContext: { authState, authDispatch },
  };
  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
