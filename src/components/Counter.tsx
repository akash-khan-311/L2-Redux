import { useState } from "react";

type TCounter = {
  type: number;
};

const Counter: React.FC<TCounter> = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-3xl border-green-500">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
