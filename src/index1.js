import React from "react";
import ReactDOM from "react-dom";

// 컴포넌트 - 생성자 함수 방식 사용
function App() {
  return (
    <h1>welcome</h1>
  )
}

const root = document.querySelector('#root')
ReactDOM.render(
  // <h1>welcome</h1>, root
  <App />, root
)
