import { useState } from "react";

export function CounterWithDecrement() {
  const [ count, setCount ] = useState(100);
  return(
     <div className="card">
      <button className="button" onClick={() => setCount((count) => count - 1)}>
        count is {count}
      </button>
     </div>
  )
}