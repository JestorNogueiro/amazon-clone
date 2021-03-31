import React, { createContext, useContext, useReducer } from "react";
//creating the Context
export const StateContext = createContext();

//this is to use inside the a component
export const useStateValue = () => useContext(StateContext);

//Building the Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
