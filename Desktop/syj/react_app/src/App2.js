import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count : 0}
  }
  render() {
    return (
      <div>
        <p>count : {this.state.count}</p>
        <p>
          <button
          onClick={()=>{
            this.setState((state) => ({count: state.count + 3}))
          }}>click</button>
        </p>
      </div>
    )
  }
}

export default App