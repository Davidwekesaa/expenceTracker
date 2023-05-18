import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

//initial states
const initialStates = {
  transactions: [],
};

//create context

export const GlobalContext = createContext(initialStates);

//provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialStates);

  //actions

  function DeleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transactions) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        DeleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
