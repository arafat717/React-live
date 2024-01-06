const App = React.createElement(
  "h1",
  { style: { color: "red" } },
  "Hello World"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App);

console.log(root);
