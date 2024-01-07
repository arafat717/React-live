const bigwatch = () => {
  return React.createElement("h5", {}, "hello world from once more");
};

const smallwatch = () => {
  return React.createElement("p", {}, "hello world");
};

const App = () => {
  {
    return React.createElement(
      "h1",
      { style: { color: "red" } },
      "Hello World",
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
