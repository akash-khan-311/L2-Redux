import "./App.css";
import TodoForm from "./components/todo/TodoForm";
// import Counter from "./components/Counter";
// import UserInfoWithReducer from "./components/UserInfoWithReducer";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <>
      {/* <Counter type={0} /> */}
      {/* <UserInfoWithReducer /> */}

      <TodoProvider>
        <TodoForm />
      </TodoProvider>
    </>
  );
}

export default App;
