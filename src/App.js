import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Icons from "./components/Icons";
import About from "./components/About";
import Products from "./components/Products";
import Review from "./components/Review";
import Contect from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />;
      <Home />;
      <About />
      <Icons />;
      <Products />;
      <Review />
      <Contect />
      <Footer />
    </>
  );
}

export default App;
