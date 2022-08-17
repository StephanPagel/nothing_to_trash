import ProductCard from "../components/ProductCard";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import "./already_sold.scss"

const alreadySold = () => {
    return (
      <div>
        <h1>Mit diesen Artikeln konnten wir schon Müll vermeiden</h1>
        <Searchbar />
        <Sidebar />
        <ProductCard />
      </div>
    );
}

export default alreadySold;