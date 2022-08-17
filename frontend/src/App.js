import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Login from "./pages/login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Maketplace from "./pages/marketplace";
import SetProduct from "./pages/setProduct";
import Wishlist from "./pages/wishList";
import AlreadySold from "./pages/alreadySold";
import ProductDetail from "./pages/productDetail";
import AboutUs from "./pages/aboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="marketplace" element={<Maketplace />} />
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
