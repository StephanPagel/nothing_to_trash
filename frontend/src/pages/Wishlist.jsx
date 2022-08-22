import ProductCard from "../components/ProductCard";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import "./wishlist.scss";

export default function Wishlist(props) {
  return (
    <div className="wishlist">
      <h1>Diese Artikel hättest du gerne</h1>
      <Searchbar />
      <Sidebar />
      <Sidebar />
      {props.allProducts &&
        props.allProducts.map((product) => (
          <ProductCard
            key={product._id}
            adType={product.adType}
            delivery={product.delivery}
            title={product.title}
            condition={product.condition}
            brand={product.brand}
            descriptionShort={product.descriptionShort}
            descriptionLong={product.descriptionLong}
            amount={product.amount}
            price={product.price}
            priceOptions={product.priceOptions}
            category={product.category}
            filename={product.filename}
          />
        ))}
    </div>
  );
}
