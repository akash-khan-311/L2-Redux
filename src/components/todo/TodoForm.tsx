import { useState, type FormEvent } from "react";
import UseTodoContext from "../../context/useTodoContext";
import type { TTodo } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = UseTodoContext();
  const [task, setTask] = useState("");

  console.log(state);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };

    dispatch({ type: "ADD_TODO", payload: todo });
  };
  return (
    <div>
      <h1>TodoForm</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="todo">Task</label>
        <input
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>

      <div>
        {state.map((todo: TTodo) => (
          <li
            key={todo.id}
            onClick={() =>
              dispatch({ type: "COMPLETE_TODO", payload: todo.id })
            }
          >
            {todo.title}
          </li>
        ))}
      </div>
    </div>
  );
};

export default TodoForm;
