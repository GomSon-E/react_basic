// import
import React from "react";
import ReactDOM from "react-dom/client";

// component
function Com() {
  return (
    <>
    <h1 id="main">welcome</h1>
    <h2 className="sub" name={5}>welcome2</h2>
    </>
  )
}

// export
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <Com />
  </React.StrictMode>
)