import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import "./marketplace.scss";

export default function Marketplace({ allProducts, token, setToken }) {

  return (
    <div className="marketplace">
      <h1>Hilf mit die Umwelt zu schützen</h1>
      <p className="marketplace_p">
        Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen
        Abfälle gelangen jährlich in die Ozeane. Sie kosten Abertausende
        Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher
        Nahrung, Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll zu
        reduzieren und trashnothing.
      </p>
      <Searchbar />
      <Sidebar />
      {allProducts &&
        allProducts.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
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
            token={token}
            setToken={setToken}
          />
        ))}
    </div>
  );
}
