import ProductCard from "./../components/ProductCard";
import SidebarUserProfil from "./../components/SidebarUserProfil";
import Sidebar from "./../components/Sidebar";
import Searchbar from "./../components/Searchbar";
import "./userprofil.scss";

const UserProfil = (props) => {
  return (
    <div className="userprofil">
      <div style={{ background: "linear-gradient(#E5EFFF, #fff, #fff, #fff)" }}>
        {/* <Sidebar /> */}
        <h1>Hilf mit die Umwelt zu schützen</h1>
        <p className="userprofil_p">
          Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen
          Abfälle gelangen jährlich in die Ozeane. Sie kosten Abertausende
          Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher
          Nahrung, Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll
          zu reduzieren und trashnothing.
        </p>
        <Searchbar
          allProducts={props.allProducts}
          setSearchResults={props.setSearchResults}
        />
        <SidebarUserProfil
          token={props.token}
          setToken={props.setToken}
          setUserData={props.setUserData}
          userData={props.userData}
          setErrorMessage={props.setErrorMessage}
        />
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
    </div>
  );
};
export default UserProfil;
