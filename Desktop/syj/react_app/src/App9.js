import React, {useState} from "react"

function Black() {
  return (
    <p>black</p>
  )
}

function White() {
  return (
    <p>white</p>
  )
}

function App(props) {

  const bool = props.title
  
  return (
    bool ? <White /> : <Black />
  )
}

export default App