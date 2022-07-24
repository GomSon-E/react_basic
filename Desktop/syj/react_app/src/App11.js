import React, {useState} from "react"

function App(e) {
  const [a, setA] = useState({value:""})
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Name:</label>
        <input type="text" value={a.value} onChange={handleChange} />
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  )

  function handleChange(event) {
    // console.log(event.target.value)
    setA({value: event.target.value})
  }
  function handleSubmit(event) {
    event.preventDefault()
    alert('value : ' + a.value)
  }
}

export default App