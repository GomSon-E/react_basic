import React, {useState, useEffect} from "react"

function App(e) {
  const [count, setCount] = useState(0)
  useEffect(()=>{console.log('effect0')}) // 무조건
  useEffect(()=>{console.log('effect1')}, []) // 처음 한번만
  useEffect(()=>{console.log('effect2')}, [count]) // 필요한 것이 작동이 되면
  return (
    <div>
      <h1>effect 기본</h1>
      <p>count 변경 보기: {count}</p>
      <p><button onClick={click}>click</button></p>
    </div>
  )

  function click () {
    setCount(count + 1)
  }
}

export default App