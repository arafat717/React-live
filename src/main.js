import React from "react";
import ReactDOM from "react-dom/client";
import { Smallwatch } from "./another";
import App from "./App";
// const App = () => {
//   {
//     return React.createElement(
//       "h1",
//       { style: { color: "red" } },
//       "Hello world from resolve another and 0ther from jibon",
//       smallwatch(),
//       bigwatch()
//     );
//   }
// };

// const HelloWorld = () => {
//   return <h1> thsi is sisisi</h1>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
