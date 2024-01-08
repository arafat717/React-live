import React from "react";
import ReactDOM from "react-dom/client";
import { bigwatch } from "./OnceMore";
import { smallwatch } from "./another";

const App = () => {
  {
    return React.createElement(
      "h1",
      { style: { color: "red" } },
      "Hello world from resolve another and 0ther from jibon",
      smallwatch(),
      bigwatch()
    );
  }
};

// const HelloWorld = () => {
//   return <h1> thsi is sisisi</h1>;
// };

// const App = () => {
//   return (
//     <React.Fragment>
//       <div>this is arafat jibon</div>
//       <HelloWorld></HelloWorld>
//     </React.Fragment>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
