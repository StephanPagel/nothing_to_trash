// import { Navigate } from "react-router-dom";
import "./wishlistbutton.scss";


export default function Wishlistbutton({ productId, token }) {

  const addProducttoWishlist = (productId) => {
    fetch("http://localhost:9000/users/addProducttoWishlist" + productId, {
      headers: {
        token: `JWT ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "put"
    })
      .then(() => console.log('Addede to wishlist'),
        window.location.reload(false));

  }
  return (
    <div className="wishlist">
      <button className="btn_grey" onClick={() => addProducttoWishlist(productId)}>♡ Auf die Wunschliste</button>
    </div>
  );
}
