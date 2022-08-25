import { apiBaseUrl } from "./api";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Marketplace from "./pages/Marketplace";
import SetProduct from "./pages/SetProduct";
import AlreadySold from "./pages/AlreadySold";
import ProductDetail from "./pages/ProductDetail";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import AuthRequired from "./components/AuthRequired";
import UsersProducts from "./components/UsersProducts";
import EditProduct from "./components/EditProduct";
import ProductDetailUser from "./pages/ProductDetailUser";

console.log("%c****************", "color:yellow");
console.log("%cNOTHING TO TRASH", "color:blue");
console.log(
  "%c© Emre, Stephan, Alex, Michaela und Elias / SuperCode 2022",
  "color:violet"
);
console.log("%c****************", "color:yellow");

function App() {
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [userData, setUserData] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [productCondition, setProductCondition] = useState([]);
  const [productDelivery, setProductDelivery] = useState([]);
  const [productPrice, setProductPrice] = useState([]);

  useEffect(() => {
    fetch(`${apiBaseUrl}products/allproducts`)
      .then((allProducts) => allProducts.json())
      .then((productsArray) =>
        productsArray.filter((product) => {
          return product.sold == false;
        })
      )
      .then((productsforSale) => setAllProducts(productsforSale))
      .catch((err) => console.log(err));
  }, [productDelivery, productPrice]);

  return (
    <div className="App">
      <Navbar
        token={token}
        setToken={setToken}
        setUserData={setUserData}
        userData={userData}
        setErrorMessage={setErrorMessage}
      />
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
          path="marketplace"
          element={
            <Marketplace
              allProducts={allProducts}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              token={token}
              setToken={setToken}
              productCategory={productCategory}
              setProductCategory={setProductCategory}
              productCondition={productCondition}
              setProductCondition={setProductCondition}
              productDelivery={productDelivery}
              setProductDelivery={setProductDelivery}
              productPrice={productPrice}
              setProductPrice={setProductPrice}
            />
          }
        />
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
        <Route path="editproduct/:id" element={<EditProduct />} />
        <Route
          path="set_product"
          element={
            <AuthRequired token={token} setToken={setToken}>
              <SetProduct token={token} setToken={setToken} />
            </AuthRequired>
          }
        />
        <Route path="set_product" element={<SetProduct token={token} />} />
        <Route
          path="product_details/:id"
          element={
            <ProductDetail
              productDetails={productDetails}
              setProductDetails={setProductDetails}
            />
          }
        />
        <Route
          path="product_details_user/:id"
          element={
            <ProductDetailUser
              productDetails={productDetails}
              setProductDetails={setProductDetails}
              token={token}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route path="sold" element={<AlreadySold />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="register" element={<Register />} />
        <Route
          path="usersproducts"
          element={
            <AuthRequired token={token} setToken={setToken}>
              <UsersProducts userData={userData} setUserData={setUserData} />
            </AuthRequired>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
//element={<Marketplace allProducts={allProducts}
