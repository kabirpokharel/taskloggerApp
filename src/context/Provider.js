import React, { createContext, useReducer } from 'react';
import authInitialState from './initialStates/authInitialState';
import tasklogInitialState from './initialStates/tasklogInitialState';
import authReducer from './reducers/authReducer';
import tasklogReducer from './reducers/tasklogReducer';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [tasklogState, tasklogDispatch] = useReducer(tasklogReducer, tasklogInitialState);
  const contextValue = {
    authContext: { authState, authDispatch },
    tasklogContext: { tasklogState, tasklogDispatch },
  };
  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
