import "./App.css";
import Brand from "./components/Brand/Brand";
import Navbar from "./components/NavBar/NavBar";
import ThreeDModel from "./container/3DModel/3DModel";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import KeyFeature from "./container/KeyFeature/KeyFeature";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <ThreeDModel />
        <KeyFeature />
        <Footer />
      </div>
    </>
  );
}

export default App;
