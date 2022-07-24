import React from "react";
import ReactDOM from "react-dom/client";

// 컴포넌트 - 생성자 함수 방식 사용
function App() {
  return (
    <h1>welcome
      {/* jsx 안 주석 */}
    </h1>
  )
}

const root = ReactDOM.createRoot( document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
