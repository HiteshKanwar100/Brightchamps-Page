import "./App.css";
import "./Pages/FApp.css";
import ProductRight from "./components/ProductRight";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductLeft from "./components/ProductLeft";
import FApp from "./Pages/FApp";

function App() {
  return (
    <>
      <div className="GeeksForGeeks">
        <Navbar />
        <ProductRight />
        <ProductLeft />
        <Footer />
      </div>
    </>
  );
}

export default App;
