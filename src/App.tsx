import "./App.css";
import Brand from "./components/Brand/Brand";
import CTA from "./components/CTA/CTA";
import Navbar from "./components/NavBar/NavBar";
import ThreeDModel from "./container/3DModel/3DModel";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import KeyFeature from "./container/KeyFeature/KeyFeature";
import Possibility from "./container/Possibility/Possibility";

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
        <Possibility />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
