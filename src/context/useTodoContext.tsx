import { useContext } from "react";
import { TodoContext } from "./TodoProvider";

const UseTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

export default UseTodoContext;
