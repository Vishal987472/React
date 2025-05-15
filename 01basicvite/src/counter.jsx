import { useState } from "react";


function Count() {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    if(counter < 20) {
      setCounter(counter + 1);
    }else {
      alert("Counter cannot exceed 20");
    }
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Count;