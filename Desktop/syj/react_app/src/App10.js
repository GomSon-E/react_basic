import React, {useState} from "react"

function App(e) {
  function handleSubmit(e){
    e.preventDefault()
    console.log('clicked')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">submit</button>
    </form>
  )
}

export default App