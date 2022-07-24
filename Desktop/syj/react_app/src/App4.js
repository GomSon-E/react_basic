import React, {useState} from "react"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <p>
        <button onClick={click}>click</button>
      </p>
    </div>
  )
  function click() {
    setCount(count + 2)
  }
}

export default App