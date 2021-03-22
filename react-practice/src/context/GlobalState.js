import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// Initial State
const initialState = {
  forms: [
    { id: 1, description: "For test purpose", category: "css", content: "test" },
    { id: 2, description: "For test purpose aaa", category: "css", content: "test"},
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action
  const deleteList = (id) => {
      dispatch ({
        type: "DELETE_LIST",
        payload: id
      })
  };

  const addList = (form) => {
    dispatch ({
      type: "ADD_LIST",
      payload: form
    })
};


  return (
    <GlobalContext.Provider
      value={{
        forms: state.forms,
        deleteList,
        addList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
