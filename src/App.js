import logo from "./logo.svg";
// import "./App.css";
import Counter from "./Counter";
import DataFetching from "./DataFetching";
import Navbar from "./Navbar";
import "./styles.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

function App() {
  let component 
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break
    case "/about":
      component = <About />;
      break
    case "/pricing":
      component = <Pricing />;
      break
  }
  return (
    <div className="App">
      <Navbar />
      <Counter />
      <DataFetching />
      {component}
    </div>
  );
}

export default App;
