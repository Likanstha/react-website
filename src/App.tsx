import "./App.css";
import Brand from "./components/Brand/Brand";
import Navbar from "./components/NavBar/NavBar";
import Header from "./container/Header/Header";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
      </div>
    </>
  );
}

export default App;
