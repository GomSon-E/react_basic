import React, {useState} from "react"

const allColor = ['red', 'blue', 'yellow', 'orange', 'violet']

function App() {
  const allSize = (function(min, max){
    let size = []
    for(let i= min; i <= max; i++) {
      size.push(i)
      size.push(i + 0.5)
    }
    return size
  })(7, 12)

  return (
    <p>
      <label htmlFor="size">size :</label>
      <select id="size">
        {optionSize()}
      </select>
    </p>
  )

  function optionSize() {
    const sizes = allSize
    return sizes.map((item, index)=> {return (<option key={index} value={item}>{item}</option>)})
  }

}

export default App