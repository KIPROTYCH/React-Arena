import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import DataFetching from "./DataFetching";

function App() {
  return (
    <div className="App">
      <h1>React Hooks Examples</h1>
      <Counter />
      <DataFetching/>
    </div>
  );
}

export default App;
