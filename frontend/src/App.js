import { apiBaseUrl } from "./api";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Register from "./pages/Register";

console.log("%c****************", "color:yellow");
console.log("%cNOTHING TO TRASH", "color:white");
console.log(
  "%c© Emre, Stephan, Alex, Michaela und Elias / SuperCode 2022",
  "color:violet"
);

function App() {
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`${apiBaseUrl}products/allproducts`)
      .then((allProducts) => allProducts.json())
      .then((productsArray) => setAllProducts(productsArray))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar errorMessageausLogin={errorMessage} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="login"
          element={
            <Login
              setToken={setToken}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route
          path="login"
          element={
            <Login
              setToken={setToken}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route
          path="marketplace"
          element={<Marketplace allProducts={allProducts} />}
        />
        <Route path="set_product" element={<SetProduct />} />
        <Route
          path="product_details"
          element={<ProductDetail allProducts={allProducts} />}
        />
        <Route
          path="sold"
          element={<AlreadySold allProducts={allProducts} />}
        />
        <Route
          path="wishlist"
          element={<Wishlist allProducts={allProducts} />}
        />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
