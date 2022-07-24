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
  
  if(bool) { return <White />}
  else { return <Black />}

}

export default App