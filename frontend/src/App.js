import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Marketplace from "./pages/Marketplace";
import SetProduct from "./pages/SetProduct";
import Wishlist from "./pages/Wishlist";
import AlreadySold from "./pages/AlreadySold";
import ProductDetail from "./pages/ProductDetail";
import AboutUs from "./pages/AboutUs";

console.log("%c****************", 'color:yellow');
console.log("%cNOTHING TO TRASH", 'color:white');
console.log("%c© Emre, Stephan, Alex, Michaela und Elias / SuperCode 2022", 'color:violet');
console.log("%c****************", 'color:yellow');

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="set_product" element={<SetProduct />} />
        <Route path="product_details" element={<ProductDetail />} />
        <Route path="sold" element={<AlreadySold />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="about_us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
