import React, {useState} from "react"

function App(props) {
  console.log(props.title)
  return (
    <ul>
      {
        props.title.map((item, index)=>(<li key={index}>{item}</li>))
      }
    </ul>
  )
}

export default App