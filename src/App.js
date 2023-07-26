import logo from "./logo.svg";
// import "./App.css";
import Counter from "./Counter";
import DataFetching from "./DataFetching";
import Navbar from "./Navbar";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Counter />
      <DataFetching/>
    </div>
  );
}

export default App;
