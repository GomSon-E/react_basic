import React, {useState} from "react"

const allColor = ['red', 'blue', 'green', 'brown', 'purple']

function App() {
  const [v,setV] = useState({value: ""})
  return (
    <p>
      <label htmlFor="color">color</label>
      <select id="color" onChange={selectColor}>
        {optionColor()}
      </select>
      <img src={"./data/"+ v.value +".jpg"} alt={v.value} />
    </p>
  )

  function optionColor() {
    const colors = allColor
    return colors.map((item, index)=> {return (<option values={item} key={index}>{item}</option>)})
  }

  function selectColor(e) {
    setV({value: e.target.value})
  }
}

export default App