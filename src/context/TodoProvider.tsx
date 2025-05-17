/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useReducer } from "react";
const actionConstant = {
  ADD_TODO: "ADD_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
} as const;
type TTodoProviderProps = {
  children: React.ReactNode;
};
export type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAction =
  | { type: "ADD_TODO"; payload: TTodo }
  | { type: "COMPLETE_TODO"; payload: string };

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case actionConstant.ADD_TODO:
      return [...currentState, action.payload];
    case actionConstant.COMPLETE_TODO:
      return currentState.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    default:
      return currentState;
  }
};

export const TodoContext = createContext<{
  state: TTodo[];
  dispatch: React.Dispatch<TAction>;
} | null>(null);

const TodoProvider = ({ children }: TTodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
