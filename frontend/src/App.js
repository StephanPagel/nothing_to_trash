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
import AuthRequired from "./components/AuthRequired";
import UserProfil from "./pages/UserProfil";

console.log("%c****************", 'color:yellow');
console.log("%cNOTHING TO TRASH", 'color:blue');
console.log("%c© Emre, Stephan, Alex, Michaela und Elias / SuperCode 2022", 'color:violet');
console.log("%c****************", 'color:yellow');


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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login setToken={setToken} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />} />
        <Route path="marketplace" element={<Marketplace allProducts={allProducts} />} />
        <Route path="login" element={<Login setToken={setToken} />} />
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
          path="marketplace"
          element={<Marketplace allProducts={allProducts} />}
        />
        <Route
          path="set_product"
          element={
            <AuthRequired token={token} setToken={setToken}>
              <SetProduct token={token} setToken={setToken} />
            </AuthRequired>
          }
        />
        <Route path="set_product" element={<SetProduct token={token} />} />
        <Route path="product_details" element={<ProductDetail />} />
        <Route path="sold" element={<AlreadySold />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="register" element={<Register />} />
        <Route path="userprofil" element={
          <AuthRequired token={token} setToken={setToken}>
            <UserProfil />
          </AuthRequired>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
//element={<Marketplace allProducts={allProducts} 