import { useReducer, type ChangeEvent } from "react";

const initialState = {
  name: "",
  age: 0,
  hobbies: [] as string[],
};

type TAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_AGE"; payload: number }
  | { type: "SET_HOBBIES"; payload: string };

const reducer = (state: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_AGE":
      return {
        ...state,
        age: action.payload,
      };
    case "SET_HOBBIES":
      return {
        ...state,
        hobbies: [...state.hobbies, action.payload],
      };
  }
};

const UserInfoWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
        <input
          type="number"
          name="age"
          id="age"
          onChange={(e) =>
            dispatch({ type: "SET_AGE", payload: Number(e.target.value) })
          }
        />
        <input
          type="text"
          name="hobbies"
          id=""
          onBlur={(e) =>
            dispatch({ type: "SET_HOBBIES", payload: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInfoWithReducer;
