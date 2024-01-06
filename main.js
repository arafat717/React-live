const App = React.createElement(
  "h1",
  { style: { color: "red" } },
  "Hello World"
);

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
root.render(App);
