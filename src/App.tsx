import "./App.css";
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
      </div>
    </>
  );
}

export default App;
