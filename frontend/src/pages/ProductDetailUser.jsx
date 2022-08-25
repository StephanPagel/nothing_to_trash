import { useState, useEffect, Link } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../api";
import EditProduct from "./../components/EditProduct";
import "./productDetailUser.scss";

const ProductDetailUser = ({
    productDetails,
    setProductDetails,
    token,
    setErrorMessage,
    allProducts,
    setAllProducts,
    userData,
    setUserData,
}) => {
    const { id } = useParams();
    console.log(userData.products);
    const updatedUserDataArray = userData.products.filter((e) => e._id !== id);
    console.log(updatedUserDataArray);
    //   console.log(allProducts);
    //   const updatedProductArray = allProducts.filter((e) => e._id !== id);
    //   console.log(updatedProductArray);
    const [showEditor, setShowEditor] = useState(false);

    const navigator = useNavigate();

    useEffect(() => {
        fetch(`${apiBaseUrl}products/allproducts/` + id)
            .then((response) => response.json())
            .then((productDetails) => setProductDetails(productDetails));
    }, [id, setProductDetails]);

    const changeStatusSold = () => {
        const updatedProductArray = allProducts.filter((e) => e._id !== id);
        fetch(`${apiBaseUrl}products/changestatus`, {
            method: "PUT",
            headers: {
                token: `JWT ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, sold: true }),
        })
            .then((res) => res.json())
            .then((productData) => {
                if (!productData._id) {
                    setErrorMessage(productData.message || "Error loading product data.");
                    return;
                }
                // setProductDetails((prev) => ({ ...prev, ...productData }));
                setAllProducts(updatedProductArray);
                navigator("/marketplace")
            });
    };

    const deleteProduct = () => {
        const updatedProductArray = allProducts.filter((e) => e._id !== id);
        console.log(updatedProductArray);
        fetch(`${apiBaseUrl}products/deletedProduct/` + id, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(
                () => setAllProducts(updatedProductArray),
                navigator("/usersproducts")
            )
            .catch((err) => console.log(err));
    };

    return (
        <div className="detail_container_u">
            <div className="product_details_u">
                <img
                    src={
                        productDetails.filename &&
                        `${apiBaseUrl}/${productDetails.filename}`
                    }
                    alt="product"
                />
                <div className="product_facts_u">
                    <h1>{productDetails.title}</h1>
                    <h2>{productDetails.price} EUR</h2>
                    <div className="facts_grid_u">
                        <p>Zustand</p>
                        <p>{productDetails.condition}</p>
                        <p>Marke</p>
                        <p>{productDetails.brand}</p>
                        <p>Lieferung</p>
                        <p>{productDetails.delivery === "deliveryYes" ? "Ja" : "Nein"}</p>
                        <p>Anzahl</p>
                        <p>{productDetails.amount}</p>
                        <div className="contacts">
                            <p>Verkäufer: {productDetails.name}</p>
                            <p>Tel: +49 {productDetails.phone}</p>
                        </div>
                    </div>
                    <button className="btn_wish_u">♡ Auf die Wunschliste</button>
                    <span>Produktbeschreibung</span>
                    <p>{productDetails.descriptionLong}</p>
                </div>
            </div>
            <div className="buttons">
                <button className="btn_edit" onClick={() => setShowEditor(!showEditor)}>
                    Bearbeiten
                </button>
                <button className="btn_sold" onClick={changeStatusSold}>
                    Verkauft
                </button>
                <button className="btn_delete" onClick={deleteProduct}>
                    Produkt löschen
                </button>
            </div>
            {showEditor && (
                <EditProduct
                    productId={id}
                    productDetails={productDetails}
                    setProductDetails={setProductDetails}
                />
            )}
        </div>
    );
};

export default ProductDetailUser;
