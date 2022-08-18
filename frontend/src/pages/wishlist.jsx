import ProductCard from '../components/ProductCard';
import Searchbar from '../components/Searchbar'
import Sidebar from '../components/Sidebar';
import "./wishlist.scss"

export default function Wishlist() {
  return (
    <div className="wishlist">
      <h1>Diese Artikel hättest du gerne</h1>
      <Searchbar />
      <Sidebar />
      <ProductCard />
    </div>
  );
}
